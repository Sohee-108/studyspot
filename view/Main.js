import React from "react";
import styled from "styled-components";
import { useColorScheme } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StopWatch from "./StopWatch";
import Schedule from "./Schedule";
import Setting from "./Setting";
import Support from "./Support";
import Theme from "./Theme";
import LoginView from "../components/LoginView";

// #region styled-component 부분
const TabBarIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
`;

const settingLightOptions = {
  headerStyle: {
    backgroundColor: "#E5D5C6",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  headerBackTitleVisible: false,
  headerBackButtonMenuEnabled: false,
  headerTintColor: "#ffffff",
};

const settingDarkOptions = {
  headerStyle: {
    backgroundColor: "#E5D5C6",
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#000000",
  },
  headerBackTitleVisible: false,
  headerBackButtonMenuEnabled: false,
  headerTintColor: "#000000",
};

// #endregion

//설정화면 Stack
const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  const isLight = useColorScheme() === "light";
  return (
    <SettingsStack.Navigator firstRoute="Settings">
      <SettingsStack.Screen
        name="Setting"
        component={Setting}
        options={isLight ? settingLightOptions : settingDarkOptions}
      />
      <SettingsStack.Screen
        name="Theme"
        component={Theme}
        options={isLight ? settingLightOptions : settingDarkOptions}
      />
      <SettingsStack.Screen
        name="Support"
        component={Support}
        options={isLight ? settingLightOptions : settingDarkOptions}
      />
    </SettingsStack.Navigator>
  );
};

const Main = () => {
  const BottomTab = createBottomTabNavigator();
  const isLight = useColorScheme() === "light";

  return (
    <BottomTab.Navigator firstRoute="Menu">
      <BottomTab.Screen
        name="Schedule"
        component={Schedule}
        options={
          isLight
            ? {
                headerShown: false,
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#313131",
                tabBarStyle: { backgroundColor: "#E5D5C6" },
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require("../assets/images/icon/lightmode/scheduleBlack.png")}
                  />
                ),
              }
            : {
                headerShown: false,
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#313131",
                tabBarStyle: { backgroundColor: "#E5D5C6" },
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require("../assets/images/icon/darkmode/scheduleWhite.png")}
                  />
                ),
              }
        }
      />
      <BottomTab.Screen
        name="StopWatch"
        component={StopWatch}
        options={
          isLight
            ? {
                headerShown: false,
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#313131",
                tabBarStyle: { backgroundColor: "#E5D5C6" },
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require("../assets/images/icon/lightmode/stopwatchBlack.png")}
                  />
                ),
              }
            : {
                headerShown: false,
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#313131",
                tabBarStyle: { backgroundColor: "#E5D5C6" },
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require("../assets/images/icon/darkmode/stopwatchWhite.png")}
                  />
                ),
              }
        }
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={
          isLight
            ? {
                headerShown: false,
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#313131",
                tabBarStyle: { backgroundColor: "#E5D5C6" },
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require("../assets/images/icon/lightmode/settingsBlack.png")}
                  />
                ),
              }
            : {
                headerShown: false,
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#313131",
                tabBarStyle: { backgroundColor: "#E5D5C6" },
                tabBarIcon: () => (
                  <TabBarIcon
                    source={require("../assets/images/icon/darkmode/settingsWhite.png")}
                  />
                ),
              }
        }
      />
    </BottomTab.Navigator>
  );
};

export default Main;
