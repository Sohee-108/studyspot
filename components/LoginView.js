import React, { useEffect, useState } from "react";
import { Text, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import auth from "@react-native-firebase/auth";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// #region styled-component 부분

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const View = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.Image`
  margin-top: 130px;
  width: 350px;
  height: 300px;
`;

const GoogleLoginButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  border-width: 1.5px;
  border-radius: 10px;
`;

// #endregion

const LoginView = () => {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(user);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "587985236624-rka1iu6r7moani49i9aue19gpo0lvko0.apps.googleusercontent.com",
      offlineAccess: true,
      hostedDomain: "",
      forceConsentPrompt: true,
    });
  }, []);

  // Google 로그인
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = userInfo;
      setUser(user);
      const loggedIn = true;
      setLoggedIn(loggedIn);
      console.log("login");
      console.log(user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("statusCodes.SIGN_IN_CANCELLED");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("statusCodes.IN_PROGRESS");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("statusCodes.PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        console.log(error);
      }
    }
  };

  // Google 로그아웃
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      const loggedIn = false;
      setLoggedIn(loggedIn);
      const user = null;
      setUser(user);
      console.log("logout");
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  if (loggedIn == false) {
    return (
      <CenteredView>
        <View title="Logo">
          <LogoImage
            source={require("../assets/images/logo.png")}
            style={{ resizeMode: "contain" }}
          ></LogoImage>
        </View>
        <View>
          <GoogleSigninButton onPress={signIn}></GoogleSigninButton>
        </View>
      </CenteredView>
    );
  } else if (loggedIn == true) {
    return (
      <CenteredView>
        <View title="Logo">
          <LogoImage
            source={require("../assets/images/logo.png")}
            style={{ resizeMode: "contain" }}
          ></LogoImage>
        </View>
        <View>
          <View>
            <Button onPress={signOut} title="Signout" color="#841584"></Button>
          </View>
        </View>
        <View>
          <Image title="googleProfileImage"></Image>
          <Text>{user.name}</Text>
          <Text title="googleProfileName"></Text>
        </View>
      </CenteredView>
    );
  }
};

export default LoginView;
