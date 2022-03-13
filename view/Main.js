import React, { useState } from "react";
import styled from "styled-components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import MainView from "../components/MainView";
import StopWatch from "./StopWatch";
import Schedule from "./Schedule";
import Setting from "./Setting";
import Support from "./Support";
import Theme from "./Theme";
import LoginView from "../components/LoginView";

// #region styled-component 부분

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ProfileButton = styled.TouchableOpacity`
  align-items: center;
`;

// #endregion

const MainStack = createNativeStackNavigator();

const Main = () => {
  const navigation = useNavigation();

  const color = ["#E5D5C6", "#2478FF", "#FFDF24"]; //R, B, Y
  var [currentColor, setCurrentColor] = useState(color[0]);

  return (
    <MainStack.Navigator initialRouteName="StopWatch">
      <MainStack.Screen
        name="MainView"
        component={MainView}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="LoginView"
        component={LoginView}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: currentColor,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
          headerTintColor: "white",
        }}
      />
      <MainStack.Screen
        name="Support"
        component={Support}
        options={{
          title: "Support",
          headerStyle: {
            backgroundColor: currentColor,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
          headerTintColor: "white",
        }}
      />
      <MainStack.Screen
        name="Theme"
        component={Theme}
        options={{
          title: "Theme",
          headerStyle: {
            backgroundColor: currentColor,
          },
          headerTitleStyle: {
            fontWeight: "bold",
            color: "white",
          },
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
          headerTintColor: "white",
        }}
      />
    </MainStack.Navigator>
  );
};

export default Main;
