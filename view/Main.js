import React from "react";
import { Button, Image, Text } from "react-native";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

import MainView from "../components/MainView";
import Timer from "./StopWatch";
import Schedule from "./Schedule";
import Setting from "./Setting";
import Profile from "./Profile";
import QNA from "./QNA";
import Theme from "./Theme";

// react-navigation 모듈
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProfileButton = styled.TouchableOpacity`
  align-items: center;
`;

const MainStack = createNativeStackNavigator();

const Main = () => {
  const navigation = useNavigation();
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainView"
        component={MainView}
        options={{
          title: "스터디스팟",
          headerRight: () => (
            <ProfileButton onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/images/sky.jpeg")}
                style={{ width: 30, height: 30, borderRadius: 20 }}
              ></Image>
            </ProfileButton>
          ),
        }}
      />
      <MainStack.Screen
        name="Timer"
        component={Timer}
        options={{ title: "공부시간 측정하기" }}
      />
      <MainStack.Screen
        name="Schedule"
        component={Schedule}
        options={{ title: "일정관리" }}
      />
      <MainStack.Screen
        name="Setting"
        component={Setting}
        options={{ title: "설정" }}
      />
      <MainStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "프로필" }}
      />
      <MainStack.Screen
        name="QNA"
        component={QNA}
        options={{ title: "문의하기" }}
      />
      <MainStack.Screen
        name="Theme"
        component={Theme}
        options={{ title: "테마" }}
      />
    </MainStack.Navigator>
  );
};

export default Main;
