import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
const scrW = Dimensions.get("screen").width;
const scrH = Dimensions.get("screen").height;
const wW = Dimensions.get("window").width;
const wH = Dimensions.get("window").height;

type videoListViewStyleType = {
    container: ViewStyle,
}
export const videoListViewStyle =  StyleSheet.create<videoListViewStyleType>({ 
    container:{
        flex:1,
        backgroundColor:colors.xxlight
    }
});