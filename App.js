import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';
import Orientation from 'react-native-orientation';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [rotate, setRotate] = useState('PORTRAIT');
  useEffect(() => {
    // setTimeout(() => {
    const url = 'https://meet.jit.si/exemple';
    const userInfo = {
      displayName: 'itsME',
      email: 'user@example.com',
      avatar: 'https:/gravatar.com/avatar/abc123',
    };
    JitsiMeet.call(url, userInfo);
    /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
    /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    // }, 1000);
  }, [rotate]);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });

  // console.log('JitsiMeetModule', JitsiMeetModule)
  console.log(rotate, 'rotate');
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

  return (
    <View style={s.view}>
      <Text style={s.text}>jitsi</Text>
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
        <Text style={s.text}>OPERATION ROTATE</Text>
      </TouchableOpacity>
      
      <JitsiMeetView
        onConferenceTerminated={e => onConferenceTerminated(e)}
        onConferenceJoined={e => onConferenceJoined(e)}
        onConferenceWillJoin={e => onConferenceWillJoin(e)}
        style={s.meet}
      />
    </View>
  );
}

const s = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: 'red',
  },
  meet: {
    backgroundColor: 'black',
    height: '40%',
  },
  contentMeet: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});

export default App;
