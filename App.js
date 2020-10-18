import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, SafeAreaView} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';
import Orientation from 'react-native-orientation';
import {SquareForRotation} from './assets/svg';

const s = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#0D1824',
  },
  meet: {
    backgroundColor: 'black',
    flex: 1,
  },
  buttonRotation: {
    position: 'absolute',
    right: 17,
    bottom: 19,
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

  return (
    <SafeAreaView style={s.view}>
      <View style={s.meet}>
        <JitsiMeetView
          onConferenceTerminated={e => onConferenceTerminated(e)}
          onConferenceJoined={e => onConferenceJoined(e)}
          onConferenceWillJoin={e => onConferenceWillJoin(e)}
          style={s.meet}
        />
        <View style={s.buttonRotation}>
          <ButtonRotation />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
