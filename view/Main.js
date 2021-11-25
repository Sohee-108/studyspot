import React from 'react';

import MainView from '../components/MainView';
import Timer from './StopWatch';
import Schedule from './Schedule';
import ScheduleAdd from './ScheduleAdd';
import Setting from './Setting';
import Profile from './Profile';

// react-navigation 모듈
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const Main = (navigation) => {

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainView" component={MainView} options={{title: "스터디스팟"}} />
      <MainStack.Screen name="Timer" component={Timer} options={{title: "공부시간 측정하기"}} />
      <MainStack.Screen name="Schedule" component={Schedule} options={{title: "일정관리"}} />
      <MainStack.Screen name="ScheduleAdd" component={ScheduleAdd} options={{title: "일정추가"}} />
      <MainStack.Screen name="Setting" component={Setting} options={{title: "설정"}} />
      <MainStack.Screen name="Profile" component={Profile} options={{title: "프로필"}} />
      
    </MainStack.Navigator>

  );
}

export default Main;

