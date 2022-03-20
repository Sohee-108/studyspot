import React from "react";
// react-navigation 모듈
import { ThemeProvider } from "styled-components";
import { createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./view/Main";

const Home = createNativeStackNavigator();

const theme = {};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Home.Navigator
          screenOptions={{ headerBlurEffect: "light", headerTransparent: true }}
        >
          <Home.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </Home.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
