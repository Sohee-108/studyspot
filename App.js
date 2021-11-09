import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import studyTimer from './view/studyTimer.js'

export default function App() {
  function timerStart() {
    console.log("측정시작");
  }

  return (
      <CenteredView>
        <Button><Text>공부시간 측정하기</Text></Button>
        <Text title="studyTimer">00:00:00</Text>
        <Button title="timerstart" onPress={timerStart}></Button>
      
      </CenteredView>
      
  );
}

const Button = styled.TouchableOpacity`
  background-color: #f4511e;
  border-radius: 10px;
  padding: 15px;
  margin: 5px;
  color: #FFFFFF;

`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;