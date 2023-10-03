import React from 'react';
import { Pressable, View } from 'react-native';
import { DownloadButtonStyle } from './styles';

export type IDownloadButtonProps = {
    
}

const DownloadButton: React.FC<IDownloadButtonProps> = ({ }) => {
    return (
        <Pressable
        style={DownloadButtonStyle.container}
        >
            
        </Pressable>
    );
}

export default DownloadButton ;