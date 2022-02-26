import React from "react";
import { Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";

const GoogleSignInCustomButton = () => {
  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return <Button title="구글로그인" onPress={onGoogleButtonPress}></Button>;
};

export default GoogleSignInCustomButton;
