import React, { Component } from 'react';

import VideoPlayerWrapper from '../components/VideoPlayerWrapper';
import Constants from '../common/Constants';

export default class AnotherScreen extends Component {

    static navigationOptions = {
        title: 'React Native Video Player'
    };

    render() {
        return (
            <VideoPlayerWrapper 
                videoUrl={Constants.VIDEO_URL}
                pauseOnPress
                fullScreenOnLongPress
            />
        );
    }
}