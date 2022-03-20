import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginView from "../components/LoginView";

//로그인화면 Stack
const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator>
      <LoginStackScreen name="LoginView" component={LoginView} />
    </LoginStack.Navigator>
  );
};
