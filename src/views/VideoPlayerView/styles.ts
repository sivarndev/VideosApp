import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
const scrW = Dimensions.get("screen").width;
const scrH = Dimensions.get("screen").height;
const wW = Dimensions.get("window").width;
const wH = Dimensions.get("window").height;

type videoPlayerStyleType = {
    container: ViewStyle,
    mediaPlayer:ViewStyle
}
export const videoPlayerStyle =  StyleSheet.create<videoPlayerStyleType>({ 
    container:{
        flex:1,
       
    },
    mediaPlayer:{
        flex:1
    }
});