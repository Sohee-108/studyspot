import React from "react";
import { TouchableOpacity, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";

const GoogleSignInCustomButton = () => {
  const onGoogleButtonPress = async () => {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  };

  return (
    <TouchableOpacity onPress={onGoogleButtonPress}>
      <Text>GooGle로그인</Text>
    </TouchableOpacity>
  );
};

export default GoogleSignInCustomButton;
