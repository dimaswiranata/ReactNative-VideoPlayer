import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';

class VideoPlayer extends Component {

  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    paused: true,
  };

  video = Video;

  onLoad = (data) => {
    this.setState({ duration: data.duration });
  };

  onProgress = (data) => {
    this.setState({ currentTime: data.currentTime });
  };

  onEnd = () => {
    this.setState({ paused: true })
    this.video.seek(0)
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true })
  };

  onAudioFocusChanged = (event = { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus })
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  };

  renderRateControl(rate) {
    const isSelected = (this.state.rate === rate);

    return (
      <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode === resizeMode);

    return (
      <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    )
  }

  renderVolumeControl(volume) {
    const isSelected = (this.state.volume === volume);

    return (
      <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          <Video
            ref={(ref = Video) => { this.video = ref }}
            /* For ExoPlayer */
            source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
            // source={require('./broadchurch.mp4')}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
            fullscreenOrientation='landscape'
            controls
          />
        </TouchableOpacity>

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.25)}
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(1.5)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
  },
});

export default VideoPlayer;

// import React, { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableWithoutFeedback,
//   Dimensions,
// } from "react-native";

// import Video from "react-native-video";
// import ProgressBar from "react-native-progress/Bar";

// import Icon from "react-native-vector-icons/FontAwesome";

// function secondsToTime(time) {
//   return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
// }

// export default class rnvideo extends Component {
//   state = {
//     paused: false,
//     progress: 0,
//     duration: 0,
//   };

//   handleMainButtonTouch = () => {
//     if (this.state.progress >= 1) {
//       this.player.seek(0);
//     }

//     this.setState(state => {
//       return {
//         paused: !state.paused,
//       };
//     });
//   };

//   handleProgressPress = e => {
//     const position = e.nativeEvent.locationX;
//     const progress = (position / 250) * this.state.duration;
//     const isPlaying = !this.state.paused;
    
//     this.player.seek(progress);
//   };

//   handleProgress = progress => {
//     this.setState({
//       progress: progress.currentTime / this.state.duration,
//     });
//   };

//   handleEnd = () => {
//     this.setState({ paused: true });
//   };

//   handleLoad = meta => {
//     this.setState({
//       duration: meta.duration,
//     });
//   };

//   render() {
//     const { width } = Dimensions.get("window");
//     const height = width * 0.5625;

//     return (
//       <View style={styles.container}>
//         <View>
//           <Video
//             paused={this.state.paused}
//             source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
//             style={{ width: "100%", height }}
//             resizeMode="contain"
//             onLoad={this.handleLoad}
//             onProgress={this.handleProgress}
//             onEnd={this.handleEnd}
//             ref={ref => {
//               this.player = ref;
//             }}
//           />
//           <View style={styles.controls}>
//             <TouchableWithoutFeedback onPress={this.handleMainButtonTouch}>
//               <Icon name={!this.state.paused ? "pause" : "play"} size={30} color="#FFF" />
//             </TouchableWithoutFeedback>
//             <TouchableWithoutFeedback onPress={this.handleProgressPress}>
//               <View>
//                 <ProgressBar
//                   progress={this.state.progress}
//                   color="#FFF"
//                   unfilledColor="rgba(255,255,255,.5)"
//                   borderColor="#FFF"
//                   width={250}
//                   height={20}
//                 />
//               </View>
//             </TouchableWithoutFeedback>

//             <Text style={styles.duration}>
//               {secondsToTime(Math.floor(this.state.progress * this.state.duration))}
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 250,
//   },
//   controls: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     height: 48,
//     left: 0,
//     bottom: 0,
//     right: 0,
//     position: "absolute",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     paddingHorizontal: 10,
//   },
//   mainButton: {
//     marginRight: 15,
//   },
//   duration: {
//     color: "#FFF",
//     marginLeft: 15,
//   },
// });