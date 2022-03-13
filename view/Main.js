import React, { useState } from "react";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StopWatch from "./StopWatch";
import Schedule from "./Schedule";
import Setting from "./Setting";
import Support from "./Support";
import Theme from "./Theme";

// #region styled-component 부분
const TabBarIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

// #endregion

//설정화면 Stack
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator firstRoute="Settings">
      <SettingsStack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: "#E5D5C6",
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
      <SettingsStack.Screen
        name="Theme"
        component={Theme}
        options={{
          title: "Theme",
          headerStyle: {
            backgroundColor: "#E5D5C6",
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
      <SettingsStack.Screen
        name="Support"
        component={Support}
        options={{
          title: "Support",
          headerStyle: {
            backgroundColor: "#E5D5C6",
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
    </SettingsStack.Navigator>
  );
}

const Main = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator firstRoute="Menu">
      <BottomTab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#313131",
          tabBarStyle: { backgroundColor: "#E5D5C6" },
          tabBarIcon: () => (
            <TabBarIcon source={require("../assets/images/scheduleIcon.png")} />
          ),
        }}
      />
      <BottomTab.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#313131",
          tabBarStyle: { backgroundColor: "#E5D5C6" },
          tabBarIcon: () => (
            <TabBarIcon
              source={require("../assets/images/stopwatchIcon.png")}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#313131",
          tabBarStyle: { backgroundColor: "#E5D5C6" },
          tabBarIcon: () => (
            <TabBarIcon source={require("../assets/images/settingsIcon.png")} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Main;
