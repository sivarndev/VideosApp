import React from 'react';
import {View} from 'react-native';
import {videoPlayerStyle} from './styles';
//Import React Native Video to play video
import Video from 'react-native-video';
import { useRoute } from '@react-navigation/native';

export type IVideoPlayerViewProps = {};

const VideoPlayerView: React.FC<IVideoPlayerViewProps> = ({}) => {
    const route = useRoute();
    const {url} = route.params;
  return (
    <View style={videoPlayerStyle.container}>
      <Video
        resizeMode={'contain'}
        source={{
          uri: url || 'file:///storage/emulated/0/VideoApp/video_55608C1E-7E35-3E85-ED4E-A4BC250715DB.mp4',
        }}
        style={videoPlayerStyle.mediaPlayer}
        volume={10}
        controls

        // paused={currentPlayerStats != "PLAYING"?true:false}

        // onVideoEnd={()=> dispatch(setIsExerciseOpen(true))}
        // rate={currentPlayerStats != "PLAYING" ? 0 : 1}
      />
    </View>
  );
};

export {VideoPlayerView};
