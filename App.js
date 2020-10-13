import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';
import Orientation from 'react-native-orientation';
import {SquareForRotation} from './assets/svg';
import userPng from './assets/png/userPng.png';

const s = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#0D1824',
  },
  text: {
    color: 'red',
  },
  meet: {
    backgroundColor: 'black',
    width: '100%',
    height: 210,
  },
  contentMeet: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  buttonRotation: {
    position: 'absolute',
    right: 17,
    bottom: 19,
  },
  landscapeHeight: {
    height: '100%',
  },
  headerLeft: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 17,
    paddingBottom: 11,
    paddingTop: 11,
  },
  header: {
    backgroundColor: '#0D1824',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerRight: {
    height: 20,
    width: 70,
  },
  headerTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  contentBottom: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flex: 1,
  },
});

function App() {
  const [rotate, setRotate] = useState('PORTRAIT');
  useEffect(() => {
    const url = 'https://meet.nativetalk.co/sadss';
    const userInfo = {
      displayName: 'name',
      email: 'user@example.com',
      avatar:
        'https://lh3.googleusercontent.com/proxy/aXh6SsfSf6sQ7xgltmQoAa3r3DxDx8dryrTfsHiXLz5fCcp_iRWRK6B4NOZuuDW6Lt2JM5aFE3SNuCaQ7NT-3xKTNUiTEAgt9hJpSG3rHvOO3KpdIjw6bQ',
    };
    JitsiMeet.call(url, userInfo);
  }, [rotate]);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent);
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent);
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent);
  }

  const ButtonRotation = () => (
    <TouchableOpacity
      onPress={() => {
        if (rotate === 'PORTRAIT') {
          Orientation.lockToLandscape();
          setRotate('LANDSCAPE');
        } else {
          Orientation.lockToPortrait();
          setRotate('PORTRAIT');
        }
      }}>
      <SquareForRotation />
    </TouchableOpacity>
  );

  const currentRotation =
    rotate === 'PORTRAIT' ? s.meet : [s.meet, s.landscapeHeight];

  return (
    <SafeAreaView style={s.view}>
      {rotate === 'PORTRAIT' ? (
        <View style={s.header}>
          <Text style={s.headerLeft}>Leave</Text>
          <Text style={s.headerTitle}>00:00:00</Text>
          <View style={s.headerRight} />
        </View>
      ) : null}
      <View style={currentRotation}>
        <JitsiMeetView
          onConferenceTerminated={e => onConferenceTerminated(e)}
          onConferenceJoined={e => onConferenceJoined(e)}
          onConferenceWillJoin={e => onConferenceWillJoin(e)}
          style={currentRotation}
        />
        <View style={s.buttonRotation}>
          <ButtonRotation />
        </View>
      </View>
      {rotate === 'PORTRAIT' ? (
        <View style={s.contentBottom}>
          <Image source={userPng} style={s.image} />
        </View>
      ) : null}
    </SafeAreaView>
  );
}

export default App;
