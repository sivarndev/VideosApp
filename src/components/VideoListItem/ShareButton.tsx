import React from 'react';
import { Pressable, View } from 'react-native';
import { ShareButtonStyle } from './styles';

export type IShareButtonProps = {
    
}

const ShareButton: React.FC<IShareButtonProps> = ({ }) => {
    return (
        <Pressable
        style={ShareButtonStyle.container}
        >
            
        </Pressable>
    );
}

export { ShareButton };