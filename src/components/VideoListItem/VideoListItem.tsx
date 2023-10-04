import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { videoListItemStyle } from './styles';
import { videoObjectModel } from '../../assets/mock/videos';
import PlayButton from './PlayButton';
import VideoDesc from './VideoDesc';
import { ShareButton } from './ShareButton';
import DownloadButton from './DownloadButton';
import { checkPermission } from '../../utils/PermissionsRequests';
import { downloadFile } from '../../utils/File';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type IVideoListItemProps = {
  item: videoObjectModel;
};

const VideoListItem: React.FC<IVideoListItemProps> = ({ item }) => {
  const [state, setState] = useState({
    isOpenDownloadProgressBar: false,
    downloadProgress: new Animated.Value(0),
    isDowonloaded: false
  });

  // useEffect(() => {
  //   Animated.timing(state.downloadProgress, {
  //     toValue: 100,
  //     duration: 2000,
  //   }).start();
  // }, []);

  const pressHandler = () => {
    console.log('Video Pressed');
  };

  const onDownloadComplete = () => {
    setState(ps => ({ ...ps, isDowonloaded: true, isOpenDownloadProgressBar: false }));
  }
  const downloadProgress = (received: number, total: number) => {
    // downloadprogress: (received / total) * 100
    console.log((received / total) * 100, "PERCENTAGE");

    setState(ps => ({ ...ps, downloadProgress: new Animated.Value(Math.floor((received / total) * 100)) }))
  }
  const download = async () => {
    const permission = await checkPermission();
    if (permission) {
      const downloadedVideos = await AsyncStorage.multiGet([item.video_fk]);
      console.log(downloadedVideos, "LOGG");

      if (downloadedVideos == null) {
        await AsyncStorage.setItem(item.video_fk,item.video_fk);
      }
      else {
      
      }
      setState(ps => ({ ...ps, isOpenDownloadProgressBar: true }));
      downloadFile(item.videourl, item.video_fk, true, downloadProgress, onDownloadComplete);
      return 
    }
  }
  const share = () => {

  }

  const styles = StyleSheet.create({
    bar: {

      height: 15,
      backgroundColor: 'red',
      borderRadius: 5,
    },
  })
  return (
    <View style={videoListItemStyle.container}>
      <View style={videoListItemStyle.innerContainer}>
        <PlayButton onPress={pressHandler} thumbnail={item.thumbnail} />
        <VideoDesc
          title={item.video_title}
          subTitle={item.video_local_title}
        />
        <DownloadButton
          onPress={download}
        />

        <ShareButton
          onPress={share}
        />
      </View>
      {state.isOpenDownloadProgressBar && <View
        style={videoListItemStyle.downloadProgressBar}
      >
        <Animated.View style={[styles.bar, { width: `${state.downloadProgress}%`}]} />
      </View>}
    </View>
  );
};

export default VideoListItem;
