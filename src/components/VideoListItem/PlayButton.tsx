import React from 'react';
import {ImageBackground, Pressable, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {PlayButtonStyle} from './styles';
import {colors} from '../../theme/colors';
export type IPlayButtonProps = {
  onPress: () => void;
  thumbnail: string;
};

const PlayButton: React.FC<IPlayButtonProps> = ({onPress, thumbnail}) => {
    console.log(thumbnail, "URL");
    
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        src={thumbnail}
        resizeMode='cover'
        style={[{ width: '100%', height: '100%'}, PlayButtonStyle.container]}>
        <Ionicon name="play" size={20} color={colors.dark} />
      </ImageBackground>
    </Pressable>
  );
};

export default PlayButton;
