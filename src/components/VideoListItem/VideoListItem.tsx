import React, { useState } from 'react';
import {View} from 'react-native';
import {videoListItemStyle} from './styles';
import {videoObjectModel} from '../../assets/mock/videos';
import PlayButton from './PlayButton';
import VideoDesc from './VideoDesc';
import { ShareButton } from './ShareButton';

export type IVideoListItemProps = {
  item: videoObjectModel;
};

const VideoListItem: React.FC<IVideoListItemProps> = ({item}) => {
    const [state, setstate] = useState();
  const pressHandler = () => {
    console.log('Video Pressed');
  };
  return (
    <View style={videoListItemStyle.container}>
      <PlayButton onPress={pressHandler} thumbnail={item.thumbnail} />
      <VideoDesc
      title={item.video_title}
      subTitle={item.video_local_title}
      />
      <ShareButton 
      
      />

<ShareButton 
      
      />
    </View>
  );
};

export default VideoListItem;
