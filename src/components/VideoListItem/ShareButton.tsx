import React from 'react';
import { Pressable, View } from 'react-native';
import { ShareButtonStyle } from './styles';
import FAfiveIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors';
export type IShareButtonProps = {
    onPress:() => void
}

const ShareButton: React.FC<IShareButtonProps> = ({onPress}) => {
    return (
        <Pressable
        style={ShareButtonStyle.container}
        onPress={onPress}
        >
            <FAfiveIcon
            name={'share-alt'}
            color={colors.primary}
            size={20}
            />
        </Pressable>
    );
}

export { ShareButton };