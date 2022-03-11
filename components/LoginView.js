import React, { useEffect, useState } from "react";
import { Text, Image } from "react-native";
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
  flex: 0.5;
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
  const [user, setUser] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "587985236624-rka1iu6r7moani49i9aue19gpo0lvko0.apps.googleusercontent.com",
      offlineAccess: true,
      hostedDomain: "",
      forceConsentPrompt: true,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (loggenIn == true) {
        usre = userInfo;
        setUser(user);
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("statusCodes.SIGN_IN_CANCELLED");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("statusCodes.IN_PROGRESS");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("statusCodes.PLAY_SERVICES_NOT_AVAILABLE");
      } else {
        console.log("GoogleLoginSuccess");
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

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
        {/* <Text style={{ fontSize: 15 }}>GooGle로그인</Text> */}
      </View>
      <View>
        <Image title="googleProfileImage">{user}</Image>
        <Text title="googleProfileName">{user}</Text>
      </View>
    </CenteredView>
  );
};

export default LoginView;
