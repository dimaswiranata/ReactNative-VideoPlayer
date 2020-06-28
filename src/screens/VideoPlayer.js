// import React, {
//   Component
// } from 'react';

// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// import Video from 'react-native-video';

// class VideoPlayer extends Component {

//   state = {
//     rate: 1,
//     volume: 1,
//     muted: false,
//     resizeMode: 'contain',
//     duration: 0.0,
//     currentTime: 0.0,
//     paused: true,
//   };

//   video = Video;

//   onLoad = (data) => {
//     this.setState({ duration: data.duration });
//   };

//   onProgress = (data) => {
//     this.setState({ currentTime: data.currentTime });
//   };

//   onEnd = () => {
//     this.setState({ paused: true })
//     this.video.seek(0)
//   };

//   onAudioBecomingNoisy = () => {
//     this.setState({ paused: true })
//   };

//   onAudioFocusChanged = (event = { hasAudioFocus: boolean }) => {
//     this.setState({ paused: !event.hasAudioFocus })
//   };

//   getCurrentTimePercentage() {
//     if (this.state.currentTime > 0) {
//       return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
//     }
//     return 0;
//   };

//   renderRateControl(rate) {
//     const isSelected = (this.state.rate === rate);

//     return (
//       <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
//         <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
//           {rate}x
//         </Text>
//       </TouchableOpacity>
//     );
//   }

//   renderResizeModeControl(resizeMode) {
//     const isSelected = (this.state.resizeMode === resizeMode);

//     return (
//       <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
//         <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
//           {resizeMode}
//         </Text>
//       </TouchableOpacity>
//     )
//   }

//   renderVolumeControl(volume) {
//     const isSelected = (this.state.volume === volume);

//     return (
//       <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
//         <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
//           {volume * 100}%
//         </Text>
//       </TouchableOpacity>
//     )
//   }

//   render() {
//     const flexCompleted = this.getCurrentTimePercentage() * 100;
//     const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.fullScreen}
//           onPress={() => this.setState({ paused: !this.state.paused })}
//         >
//           <Video
//             ref={(ref = Video) => { this.video = ref }}
//             /* For ExoPlayer */
//             source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
//             // source={require('./broadchurch.mp4')}
//             style={styles.fullScreen}
//             rate={this.state.rate}
//             paused={this.state.paused}
//             volume={this.state.volume}
//             muted={this.state.muted}
//             resizeMode={this.state.resizeMode}
//             onLoad={this.onLoad}
//             onProgress={this.onProgress}
//             onEnd={this.onEnd}
//             onAudioBecomingNoisy={this.onAudioBecomingNoisy}
//             onAudioFocusChanged={this.onAudioFocusChanged}
//             repeat={false}
//             fullscreenOrientation='landscape'
//             controls
//           />
//         </TouchableOpacity>

//         <View style={styles.controls}>
//           <View style={styles.generalControls}>
//             <View style={styles.rateControl}>
//               {this.renderRateControl(0.25)}
//               {this.renderRateControl(0.5)}
//               {this.renderRateControl(1.0)}
//               {this.renderRateControl(1.5)}
//               {this.renderRateControl(2.0)}
//             </View>

//             <View style={styles.volumeControl}>
//               {this.renderVolumeControl(0.5)}
//               {this.renderVolumeControl(1)}
//               {this.renderVolumeControl(1.5)}
//             </View>

//             <View style={styles.resizeModeControl}>
//               {this.renderResizeModeControl('cover')}
//               {this.renderResizeModeControl('contain')}
//               {this.renderResizeModeControl('stretch')}
//             </View>
//           </View>

//           <View style={styles.trackingControls}>
//             <View style={styles.progress}>
//               <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
//               <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   fullScreen: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   controls: {
//     backgroundColor: 'transparent',
//     borderRadius: 5,
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   progress: {
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   innerProgressCompleted: {
//     height: 20,
//     backgroundColor: '#cccccc',
//   },
//   innerProgressRemaining: {
//     height: 20,
//     backgroundColor: '#2C2C2C',
//   },
//   generalControls: {
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 4,
//     overflow: 'hidden',
//     paddingBottom: 10,
//   },
//   rateControl: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   volumeControl: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   resizeModeControl: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   controlOption: {
//     alignSelf: 'center',
//     fontSize: 11,
//     color: 'white',
//     paddingLeft: 2,
//     paddingRight: 2,
//     lineHeight: 12,
//   },
// });

// export default VideoPlayer;

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
//               <Icon name={!this.state.paused ? "pause" : "play"} size={15} color="#FFF" />
//             </TouchableWithoutFeedback>
//             <TouchableWithoutFeedback onPress={this.handleProgressPress}>
//               <View>
//                 <ProgressBar
//                   progress={this.state.progress}
//                   color="#FFF"
//                   unfilledColor="rgba(255,255,255,.5)"
//                   borderColor="#FFF"
//                   width={250}
//                   height={10}
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
//     paddingTop: 0,
//   },
//   controls: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     height: 35,
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

import React, {Component} from 'react';
import {View, Dimensions, Image, Text, TouchableWithoutFeedback, TouchableOpacity, Button, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';

const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
  let h = 0, i = 0, s = parseInt(second);
  if (s > 60) {
    i = parseInt(s / 60);
    s = parseInt(s % 60);
  }

  let zero = function (v) {
    return (v >> 0) < 10 ? "0" + v : v;
  };
  return [zero(h), zero(i), zero(s)].join(":");
}

export default class VideoPlayScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      videoCover: "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
      videoWidth: screenWidth,
      videoHeight: screenWidth * 9/16, 
      showVideoCover: true, 
      showVideoControl: false,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      playFromBeginning: false,
    };
  }

  _onLoadStart = () => {
    console.log('on Load Start');
  };
  
  _onBuffering = () => {
    console.log('on Buffering...')
  };
  
  _onLoaded = (data) => {
    console.log('on Loaded...');
    this.setState({
      duration: data.duration,
    });
  };
  
  _onProgressChanged = (data) => {
    console.log('on Progress Changed');
    if (this.state.isPlaying) {
      this.setState({
        currentTime: data.currentTime,
      })
    }
  };
  
  _onPlayEnd = () => {
    console.log('on Play End');
    this.setState({
      currentTime: 0,
      isPlaying: false,
      playFromBeginning: true
    });
  };
  
  _onPlayError = () => {
    console.log('on Play Error');
  };

  hideControl() {
    if (this.state.showVideoControl) {
      this.setState({
        showVideoControl: false,
      })
    } else {
      this.setState(
        {
          showVideoControl: true,
        },
        () => {
          setTimeout(
            () => {
              this.setState({
                showVideoControl: false
              })
            }, 5000
          )
        }
      )
    }
  }

  onPressPlayButton() {
    let isPlay = !this.state.isPlaying;
    this.setState({
      isPlaying: isPlay,
      showVideoCover: false
    });
    if (this.state.playFromBeginning) {
      this.videoPlayer.seek(0);
      this.setState({
        playFromBeginning: false,
      })
    }
  }
  
  onControlPlayPress() {
    this.onPressPlayButton();
  }
  
  onControlShrinkPress() {
    if (this.state.isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
  }
  
  onSliderValueChanged(currentTime) {
    this.videoPlayer.seek(currentTime);
    if (this.state.isPlaying) {
      this.setState({
        currentTime: currentTime
      })
    } else {
      this.setState({
        currentTime: currentTime,
        isPlaying: true,
        showVideoCover: false
      })
    }
  }
  
  _onLayout = (event) => {
    let {width, height} = event.nativeEvent.layout;
    console.log('onLayout：' + width);
    console.log('onLayout：' + height);
    
    let isLandscape = (width > height);
    if (isLandscape){
      this.setState({
        videoWidth: width,
        videoHeight: height,
        isFullScreen: true,
      })
    } else {
      this.setState({
        videoWidth: width,
        videoHeight: width * 9/16,
        isFullScreen: false,
      })
    }
    Orientation.unlockAllOrientations();
  };
  
  playVideo() {
    this.setState({
      isPlaying: true,
      showVideoCover: false
    })
  }
  
  pauseVideo() {
    this.setState({
      isPlaying: false,
    })
  }
  
  switchVideo(videoURL, seekTime) {
    this.setState({
      videoUrl: videoURL,
      currentTime: seekTime,
      isPlaying: true,
      showVideoCover: false
    });
    this.videoPlayer.seek(seekTime);
  }
  
  render() {
    return (
      <View style={styles.container} onLayout={this._onLayout}>
        <View style={{ width: this.state.videoWidth, height: this.state.videoHeight, backgroundColor:'#000000' }}>
          <Video
            ref={(ref) => this.videoPlayer = ref}
            source={{uri: this.state.videoUrl}}
            rate={1.0}
            volume={1.0}
            muted={false}
            paused={!this.state.isPlaying}
            resizeMode={'contain'}
            playWhenInactive={false}
            playInBackground={false}
            ignoreSilentSwitch={'ignore'}
            progressUpdateInterval={250.0}
            onLoadStart={this._onLoadStart}
            onLoad={this._onLoaded}
            onProgress={this._onProgressChanged}
            onEnd={this._onPlayEnd}
            onError={this._onPlayError}
            onBuffer={this._onBuffering}
            style={{width: this.state.videoWidth, height: this.state.videoHeight}}
          />
          {
            this.state.showVideoCover ?
              <Image
                style={{
                  position:'absolute',
                  top: 0,
                  left: 0,
                  width: this.state.videoWidth,
                  height: this.state.videoHeight
                }}
                resizeMode={'cover'}
                source={{uri: this.state.videoCover}}
              /> : null
          }
          <TouchableWithoutFeedback onPress={() => { this.hideControl() }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: this.state.videoWidth,
                height: this.state.videoHeight,
                backgroundColor: this.state.isPlaying ? 'transparent' : 'rgba(0, 0, 0, 0.2)',
                alignItems:'center',
                justifyContent:'center'
              }}>
              {
                this.state.isPlaying ? null :
                  <TouchableWithoutFeedback onPress={() => { this.onPressPlayButton() }}>
                    <Image
                      style={styles.playButton}
                      source={require('../../assets/image/icon_video_play.png')}
                    />
                  </TouchableWithoutFeedback>
              }
            </View>
          </TouchableWithoutFeedback>
          {
            this.state.showVideoControl ?
              <View style={[styles.control, {width: this.state.videoWidth}]}>
                <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlPlayPress() }}>
                  <Image
                    style={styles.playControl}
                    source={this.state.isPlaying ? require('../../assets/image/icon_control_pause.png') : require('../../assets/image/icon_control_play.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.time}>{formatTime(this.state.currentTime)}</Text>
                <Slider
                  style={{flex: 1}}
                  maximumTrackTintColor={'#999999'}
                  minimumTrackTintColor={'#00c06d'}
                  thumbImage={require('../../assets/image/icon_control_slider.png')}
                  value={this.state.currentTime}
                  minimumValue={0}
                  maximumValue={this.state.duration}
                  onValueChange={(currentTime) => { this.onSliderValueChanged(currentTime) }}
                />
                <Text style={styles.time}>{formatTime(this.state.duration)}</Text>
                <TouchableOpacity activeOpacity={0.3} onPress={() => { this.onControlShrinkPress() }}>
                  <Image
                    style={styles.shrinkControl}
                    source={this.state.isFullScreen ? require('../../assets/image/icon_control_shrink_screen.png') : require('../../assets/image/icon_control_full_screen.png')}
                  />
                </TouchableOpacity>
              </View> : null
          }
        </View>
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <Button title={'play'} onPress={() => {this.playVideo()}}/>
          <Button title={'pause'} onPress={() => {this.pauseVideo()}}/>
          <Button title={'switch'} onPress={() => {this.switchVideo("https://vjs.zencdn.net/v/oceans.mp4", 0)}}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  playButton: {
    width: 50,
    height: 50,
  },
  playControl: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  shrinkControl: {
    width: 15,
    height: 15,
    marginRight: 15,
  },
  time: {
    fontSize: 12,
    color: 'white',
    marginLeft: 10,
    marginRight: 10
  },
  control: {
    flexDirection: 'row',
    height: 44,
    alignItems:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
});