import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

// #region styled-component 부분

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const View = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const LogoImage = styled.Image`
  margin-bottom: 300px;
  width: 350px;
  height: 133px;
`;

const GoogleSigninButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 347px;
  height: 61px;
  border-color: #bbbbbb;
  border-width: 3px;
  border-radius: 5px;
`;

const GoogleIcon = styled.Image`
  margin-right: 5px;
  width: 40px;
  height: 44px;
`;

const GoogleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #313131;
`;

// #endregion

LoginView = () => {
  const navigation = useNavigation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
  const [userImage, setUserImage] = useState();

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
      const userName = userInfo.user.name;
      const userImage = userInfo.user.photo;
      setUserName(userName);
      setUserImage(userImage);
      const loggedIn = true;
      setLoggedIn(loggedIn);
      console.log("login");
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
      const userName = null;
      const userImage = null;
      setUserName(userName);
      setUserImage(userImage);
      console.log("logout");
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
          <GoogleSigninButton onPress={signIn}>
            <GoogleIcon
              source={require("../assets/images/googleIcon.jpeg")}
            ></GoogleIcon>
            <GoogleText>sign-in with google</GoogleText>
          </GoogleSigninButton>
        </View>
      </CenteredView>
    );
  }
  // else if (loggedIn == true) {
  //   return (
  //     <CenteredView>
  //       <View title="Logo">
  //         <LogoImage
  //           source={require("../assets/images/logo.png")}
  //           style={{ resizeMode: "contain" }}
  //         ></LogoImage>
  //       </View>
  //       <View>
  //         <View>
  //           <Button onPress={signOut} title="Signout" color="#841584"></Button>
  //         </View>
  //       </View>
  //       <View>
  //         <Image
  //           title="googleProfileImage"
  //           source={{ uri: userImage }}
  //           style={{ width: 200, height: 200 }}
  //         ></Image>
  //         <Text>{userName} 님 환영합니다</Text>
  //         <Text title="googleProfileName"></Text>
  //       </View>
  //     </CenteredView>
  //   );
  // }
};

export default LoginView;
