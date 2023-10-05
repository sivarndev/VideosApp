import React from 'react';
import {Alert, ImageBackground, Pressable,TouchableOpacity, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {PlayButtonStyle, videoListItemStyle} from './styles';
import {colors} from '../../theme/colors';
export type IPlayButtonProps = {
  onPress: () => void;
  thumbnail: string;
};

const PlayButton: React.FC<IPlayButtonProps> = ({onPress, thumbnail}) => {
  // console.log(thumbnail, "URL");

  const press = () => {

    onPress();
  };
  return (
    <TouchableOpacity
    style={PlayButtonStyle.container}
    onPress={press}
    >
      <ImageBackground
        src={thumbnail}
        resizeMode='contain'
        style={[{width: '100%', height: '100%'}, PlayButtonStyle.container]}>
       
          <Ionicon name="play" size={20} color={colors.dark} />
      
      </ImageBackground>
      </TouchableOpacity>
  );
};

export default PlayButton;
