import React from 'react';
import { Pressable, View } from 'react-native';
import { DownloadButtonStyle } from './styles';
import Octicons from 'react-native-vector-icons/Octicons'
import { colors } from '../../theme/colors';
export type IDownloadButtonProps = {
    onPress:() => void
}

const DownloadButton: React.FC<IDownloadButtonProps> = ({ onPress}) => {
    return (
        <Pressable
        style={DownloadButtonStyle.container}
        onPress={onPress}
        >
            <Octicons
            name='download'
            color={colors.primary}
            size={20}
            />
        </Pressable>
    );
}

export default DownloadButton ;