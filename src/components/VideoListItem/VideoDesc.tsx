import React from 'react';
import {Text, View} from 'react-native';
import {VideoDescStyle} from './styles';

export type IVideoDescProps = {
  title: string;
  subTitle: string;
};

const VideoDesc: React.FC<IVideoDescProps> = ({title, subTitle}) => {
  return (
    <View style={VideoDescStyle.container}>
      <Text style={VideoDescStyle.vTitle}>{title}</Text>

      <Text style={VideoDescStyle.vSubTitle}>{subTitle}</Text>
    </View>
  );
};

export default VideoDesc;
