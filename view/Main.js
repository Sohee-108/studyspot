import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import styled from 'styled-components';

import Timer from './StopWatch';
import MainView from '../components/MainView';

// react-navigation 모듈
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const Main = (navigation) => {

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainView" component={MainView} options={{title: "스터디스팟"}} />
      <MainStack.Screen name="Timer" component={Timer} options={{title: "타이머"}} />
    </MainStack.Navigator>

  );
}

export default Main;

