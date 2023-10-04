import { Alert, PermissionsAndroid, Platform } from "react-native";

export const checkPermission = async () => {

  if (Platform.OS === 'ios') {
    return false
  } else {

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Storage Permission Required",
          message:
            "Application needs access to your storage to download File",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        console.log('Storage Permission Granted.');

        return true
      } else {
        // Alert.alert('Error','Storage Permission Not Granted');
        return false
        // If permission denied then show alert
        //   Alert.alert('Error','Storage Permission Not Granted');
      }
    } catch (err) {
      return false
      // To handle permission related exception
      console.log("++++" + err);
    }
  }
};