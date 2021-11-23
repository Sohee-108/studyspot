
import React, { Component, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import styled from 'styled-components';

const CenteredView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.TouchableOpacity`
`;

const ResetButton = styled.TouchableOpacity`
`;

const options = {
    container: {
      backgroundColor: '#300',
      padding: 5,
      borderRadius: 5,
      width: 130,
    },
    text: {
      fontSize: 30,
      color: '#FFF',
      marginLeft: 7,
      
    }
  };

const StopWatchAPI = ({}) => {

  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);

  toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  }

  resetStopwatch = () => {
    setStart(false);
    setReset(true);
  }

  return (
    <CenteredView>
      <Stopwatch laps start={start}
        reset={reset}
        options={options}
        getTime={(time) => {}} />
      <StartButton onPress={toggleStopwatch}>
        <Text style={{ fontSize: 30 }}>{!start ? "Start" : "Stop"}</Text>
      </StartButton>
      <ResetButton onPress={resetStopwatch}>
        <Text style={{ fontSize: 30 }}>Reset</Text>
      </ResetButton>
    </CenteredView>
  )
}
  
  export default StopWatchAPI;
