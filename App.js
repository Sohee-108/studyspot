import React from "react";
import { useColorScheme, View, Text, SafeAreaView } from "react-native";
// react-navigation 모듈
import { ThemeProvider } from "styled-components";
import { createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./view/Main";
import Test from "./view/Test";
import { darkTheme } from "./components/theme/darkTheme";
import { lightTheme } from "./components/theme/lightTheme";

const Home = createNativeStackNavigator();

export default function App() {
  const isLight = useColorScheme() === "light";

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <NavigationContainer>
        <Home.Navigator
          screenOptions={{ headerBlurEffect: "light", headerTransparent: true }}
        >
          <Home.Screen
            name="Main"
            component={Test}
            options={{ headerShown: false }}
          />
        </Home.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
