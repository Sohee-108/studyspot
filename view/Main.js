import React, { useState, useEffect } from 'react';
import { Alert, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import styled from 'styled-components';

import MainView from '../components/MainView';
import Timer from './StopWatch';
import Schedule from './Schedule';
import Alarm from './Alarm';
import Setting from './Setting';

// react-navigation 모듈
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const Main = (navigation) => {

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainView" component={MainView} options={{title: "스터디스팟"}} />
      <MainStack.Screen name="Timer" component={Timer} options={{title: "공부시간 측정하기"}} />
      <MainStack.Screen name="Schedule" component={Schedule} options={{title: "일정관리"}} />
      <MainStack.Screen name="Alarm" component={Alarm} options={{title: "알람"}} />
      <MainStack.Screen name="Setting" component={Setting} options={{title: "설정"}} />

      
    </MainStack.Navigator>

  );
}

export default Main;

