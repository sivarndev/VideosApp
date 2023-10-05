import { Dimensions, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../../theme/colors";
const scrW = Dimensions.get("screen").width;
const scrH = Dimensions.get("screen").height;
const wW = Dimensions.get("window").width;
const wH = Dimensions.get("window").height;

type videoListItemStyleType = {
    container: ViewStyle,
    innerContainer:ViewStyle,
    downloadProgressBar:ViewStyle,
    playBtn:ViewStyle
}
type playButtonStyleType = {
    container: ViewStyle
}
type videoDesStyleType = {
    container: ViewStyle,
    vTitle:TextStyle,
    vSubTitle:TextStyle
}
type shareButtonStyleType = {
    container: ViewStyle
}
type downloadButtonStyleType = {
    container: ViewStyle
}
export const videoListItemStyle =  StyleSheet.create<videoListItemStyleType>({ 
    container:{
        width:scrW*0.9,
        height:scrH*0.1,
        marginHorizontal:15,marginVertical:15,
        borderWidth:2,
        borderColor:colors.primary,
        backgroundColor:colors.light,
        borderRadius:5,
        padding:10,
     

    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    downloadProgressBar:{
        width:'100%',
        backgroundColor:'#D3D3D3',
        borderRadius:2,
        height:10
    },
    playBtn:{
        width:200,
        backgroundColor:'red'
    }
});

export const PlayButtonStyle =  StyleSheet.create<playButtonStyleType>({
    container:{
        width:wW * 0.18,
        height:wH* 0.06,
        backgroundColor:colors.secondary,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
       
    }

});

export const VideoDescStyle =  StyleSheet.create<videoDesStyleType>({
    container:{
        width:wW * 0.3,
        height:wH* 0.07,
      
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius:5
    },
    vTitle:{
        color:colors.xxdark,
        fontWeight:"bold",
        fontSize:16
    },
    vSubTitle:{
        color:colors.xxdark,fontSize:14
    }
    

});

export const ShareButtonStyle =  StyleSheet.create<shareButtonStyleType>({
    container:{
        width:wW * 0.1,
        height:wH* 0.05,
       
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:2,
        borderColor:colors.primary,
    }
});

export const DownloadButtonStyle =  StyleSheet.create<downloadButtonStyleType>({
    container:{
        width:wW * 0.1,
        height:wH* 0.05,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:2,
        borderColor:colors.primary,
    }
});