import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Video from 'react-native-video';

import Constants from '../common/Constants';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'React Native Video'
    };

    state = { showVideo: true };

    componentDidMount() {
        this.willFocusSubscription = 
        this.props.navigation.addListener('willFocus',
            () => {
                this.setState({ showVideo: true });
            }
          );
    }

    componentWillUnmount() {
        this.willFocusSubscription.unsubscribe();
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.videoContainer}>
                    {this.renderVideo()}
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Go to React Native Video Player"
                        onPress={() => {
                            this.setState({ showVideo: false });
                            this.props.navigation.navigate("Another");
                        }}
                    />
                </View>
                
            </View>
        );
    }

    renderVideo() {
        if(this.state.showVideo) {
            return (
                <Video source={{uri: Constants.VIDEO_URL}}  
                        ref={(ref) => {
                            this.player = ref
                        }}                                      
                        onBuffer={this.onBuffer}               
                        onError={this.videoError}     
                        controls        
                        style={styles.backgroundVideo} />
            );
        }

        return null;
    }

    onBuffer(bufferObj) {
        console.log('buffering', bufferObj.isBuffering);
    }

    videoError(error) {
        console.log('video error:', error);
    }
}

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    backgroundVideo: {
      flex: 1
    },
    videoContainer: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center'
    }
  });