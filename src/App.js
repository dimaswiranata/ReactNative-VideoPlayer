import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container, Content, List, ListItem, Button } from "native-base";
import Video, { FilterType } from "react-native-video";

const VideoListScreen = ({navigation}) => {
  return (
    <Container>
      <Content>
        <List>
          <ListItem onPress={() => navigation.navigate('Video Player', {
            external : true,
            videoURL : 'https://vjs.zencdn.net/v/oceans.mp4'
          })}>
            <Text>External Video Source</Text>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('Video Player', {
            external : true,
            videoURL : 'https://www.w3schools.com/html/mov_bbb.mp4'
          })}>
            <Text>Local/Internal Video Source</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

const VideoPlayerScreen = ({navigation, route}) => {
  const {external, videoURL} = route.params;
  const [filterType, setFilterType] = useState(FilterType.NONE);

  const changeFilter = (filterTypes) => {
    setFilterType(filterTypes);
  };
  return (
    <Container>
      <Video 
        controlss
        filter={filterType}
        filterEnable={true}
        source={{uri: videoURL}}
        style={{flex: 1}}
      />
      <Button block onPress={() => {
        changeFilter(FilterType.MONO);
      }}>
        <Text>Change To Mono</Text>
      </Button>
      <Button block onPress={() => {
        changeFilter(FilterType.CHROME);
      }}>
        <Text>Change To Chrome</Text>
      </Button>
      <Button block onPress={() => {
        changeFilter(FilterType.SEPIA);
      }}>
        <Text>Change To Sephia</Text>
      </Button>
    </Container>
  )
}

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Video List">
        <Stack.Screen name="Video List" component={VideoListScreen}/>
        <Stack.Screen name="Video Player" component={VideoPlayerScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})
