import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoListView from '../views/VideoListView/VideoListView';
import { VideoPlayerView } from '../views/VideoPlayerView/VideoPlayerView';

export type IMainRouteProps = {
    
}

const MainRoute: React.FC<IMainRouteProps> = ({ }) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer 
  
        >
            <Stack.Navigator 
            screenOptions={{
                headerStyle:{
                    elevation:5,

                },
                headerTitleStyle:{
                    fontWeight:'bold',
                }
            }}
            >
            <Stack.Screen name='Videos'
            
            component={VideoListView} />
                <Stack.Screen name='VideoPlayer'component={VideoPlayerView}
                options={{ headerShown: false }}
                />
            </Stack.Navigator>
            </NavigationContainer>
    );
}

export { MainRoute };