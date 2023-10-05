import React from 'react';
import { Pressable, View } from 'react-native';
import { DownloadButtonStyle } from './styles';
import Octicons from 'react-native-vector-icons/Octicons'
import { colors } from '../../theme/colors';
import MIcons from 'react-native-vector-icons/MaterialIcons'
export type IDownloadButtonProps = {
    onPress:() => void,
    isDownloaded:boolean
}

const DownloadButton: React.FC<IDownloadButtonProps> = ({ onPress, isDownloaded}) => {
    console.log(isDownloaded, "BOOL");
    const press = ()=>{
        if (isDownloaded) {
        return             
        }
        onPress()

    }
    return (
        <Pressable
        style={DownloadButtonStyle.container}
        onPress={press}
        >
          {isDownloaded &&
         <MIcons
         name='download-done'
         color={colors.primary}
         size={20}
         />}
         {!isDownloaded &&
          <Octicons
            name='download'
            color={colors.primary}
            size={20}
            />}
        </Pressable>
    );
}

export default DownloadButton ;