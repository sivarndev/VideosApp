import React, {useEffect, useState} from 'react';
import {Alert, Animated, StyleSheet, View} from 'react-native';
import {videoListItemStyle} from './styles';
import {videoObjectModel} from '../../assets/mock/videos';
import PlayButton from './PlayButton';
import VideoDesc from './VideoDesc';
import {ShareButton} from './ShareButton';
import DownloadButton from './DownloadButton';
import {checkPermission} from '../../utils/PermissionsRequests';
import {checkFileExists, downloadFile} from '../../utils/File';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs'
import { useNavigation } from '@react-navigation/native';
export type IVideoListItemProps = {
  item: videoObjectModel;
};

const VideoListItem: React.FC<IVideoListItemProps> = ({item}) => {
  const [state, setState] = useState({
    isOpenDownloadProgressBar: false,
    downloadProgress: 0,
    isDowonloaded: false,
    isVideoExist:false
  });

  const nav = useNavigation();

  // useEffect(() => {
  //   Animated.timing(state.downloadProgress,
  //      {
  //     toValue: 100,
  //     duration: 2000,
  //     useNativeDriver:true
  //   }).start();
  // }, []);

  useEffect(() => {
    if (item) {
      checkfileExistsOrNot()
      
    }
  }, [item]);

const checkfileExistsOrNot = async() => {
  const isFileExist = await checkFileExists(item.video_fk, item.video_id);

  setState(ps => ({
    ...ps,
    isDowonloaded: isFileExist,
  }));
}
  const pressHandler = () => {
    console.log("HI");
    
    if (state.isDowonloaded) {
    const url = `file:///storage/emulated/0/VideoApp/video_${item.video_fk}.mp4`
    nav.navigate('VideoPlayer', {url:url}); 
    }
    else{
      Alert.alert("Video is not downloaded. Please Download")
    }
  };

  const onDownloadComplete = () => {
    setState(ps => ({
      ...ps,
      isDowonloaded: true,
      isOpenDownloadProgressBar: false,
    }));
  };
  const downloadProgress = (received: number, total: number) => {
    // downloadprogress: (received / total) * 100
    console.log((received / total) * 100, 'PERCENTAGE');

    setState(ps => ({
      ...ps,
      downloadProgress:
        Math.floor((received / total) * 100),
    }));
  };
  const download = async () => {
    try {
      const permission = await checkPermission();
      if (permission) {
        setState(ps => ({...ps, isOpenDownloadProgressBar: true}));
        downloadFile(
          item.videourl,
          item.video_fk,
          true,
          downloadProgress,
          onDownloadComplete,
        );
      }
    } catch (error) {
      console.log(error.message, 'ERROR_DOWNLOAD');
    }
  };
  const share = () => {};

  const styles = StyleSheet.create({
    bar: {
      height: 10,
      backgroundColor: 'grey',
      borderRadius: 5,
    },
  });
  return (
    <View style={videoListItemStyle.container}>
      <View style={videoListItemStyle.innerContainer}>
        <PlayButton onPress={pressHandler} thumbnail={item.thumbnail} />
        <VideoDesc title={item.video_title} subTitle={item.video_local_title} />
       <DownloadButton  onPress={download} isDownloaded={state.isDowonloaded} />
        
      

        <ShareButton onPress={share} />
      </View>
      {state.isOpenDownloadProgressBar && (
        <View style={videoListItemStyle.downloadProgressBar}>
          <Animated.View
            style={[styles.bar, {width: `${state.downloadProgress}%`}]}
          />
        </View>
      )}
    </View>
  );
};

export default VideoListItem;
