import ReactNativeBlobUtil from "react-native-blob-util";

const { default: RNFetchBlob } = require("rn-fetch-blob");

export const downloadFile = async (fileUrl, fileID, download, progressCB, onDownloadComplete) => {

    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);

    file_ext = '.' + file_ext[0];

    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = ReactNativeBlobUtil;
    console.log(fs.dirs.PictureDir, 'Directories');
    let RootDir = fs.dirs.PictureDir;
    let options = {
        fileCache: false,
        addAndroidDownloads: {
            path:
                '/storage/emulated/0/VideoApp' +
                '/video_' +
                fileID +
                file_ext,
            description: 'downloading file...',
            notification: true,
            // useDownloadManager works with Android only
            useDownloadManager: true,
            
            
        },
    };
    if (!download) {
        config(options).cancel((err) => { 
            return "cancelled"
         })
         return
    }
    await config(options)
        .fetch('GET', FILE_URL)
        // listen to download progress event, every 10%
        .progress({ interval: 10 },(received,total)=>{
            console.log('progress',received,total);
            // this.setstate({
            //     downloadprogress:(received/total)*100
            // })
            progressCB(received,total)
        })
        .then(res => {
            // Alert after successful downloading
            console.log('res -> ', JSON.stringify(res));
            onDownloadComplete();
            // alert('Video Downloaded Successfully.');
        });
        
        
};

const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
        /[^.]+$/.exec(fileUrl) : undefined;
};


