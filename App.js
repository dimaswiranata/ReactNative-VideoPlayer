import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import VideoPlayer from 'react-native-video-controls'

const App = () => {
  return (
    <>
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        tapAnywhereToPause={true}
      />
      <View style={{height: '70%'}}>
        <Text>test</Text>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({})
