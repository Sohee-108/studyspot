import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import Main from './view/Main';

import styled from 'styled-components';

// react-navigation 모듈
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* import {Fonts} from './src/Fonts'; */

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBlurEffect: 'light', headerTransparent: true }}>
        <Stack.Screen name="Main" component={Main} options={{
          headerShown: false
        }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
