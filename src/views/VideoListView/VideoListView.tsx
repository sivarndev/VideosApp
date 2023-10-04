import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {videoListViewStyle} from './styles';
import {videoObjectModel, videos} from '../../assets/mock/videos';
import VideoListItem from '../../components/VideoListItem/VideoListItem';
import { checkPermission } from '../../utils/PermissionsRequests';

export type IVideoListViewProps = {};

const VideoListView: React.FC<IVideoListViewProps> = ({}) => {

  useEffect(() => {
    checkPermission();
  }, []);
  const [state, setstate] = useState({
    videos: videos,
  });

  const _itemRenderer = ({
    item,
    index,
  }: {
    item: videoObjectModel;
    index: any;
  }) => {
    return <VideoListItem item={item}  />;
  };
  return (
    <View style={videoListViewStyle.container}>
      <FlatList
        data={state.videos}
        keyExtractor={item => item.video_id + ''}
        renderItem={_itemRenderer}
        
      />
    </View>
  );
};

export default VideoListView;
