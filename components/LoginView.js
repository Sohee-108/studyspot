import React from "react";
import styled from "styled-components";

import { useNavigation } from "@react-navigation/native";

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

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1.5px;
  border-radius: 30px;
  border-color: gray;
  width: 300px;
  height: 53px;
  margin: 15px;
`;

const BtnText = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: "BMHANNAPro";
`;

const LoginView = () => {
  const navigation = useNavigation();

  return (
    <CenteredView>
      <View title="Logo">
        <LogoImage
          source={require("../assets/images/logo.png")}
          style={{ resizeMode: "contain" }}
        ></LogoImage>
      </View>
      <View title="Button">
        <Button title="Login" onPress={() => navigation.navigate("Login")}>
          <BtnText>로그인</BtnText>
        </Button>
        <Button title="SignUp" onPress={() => navigation.navigate("SignUp")}>
          <BtnText>회원가입</BtnText>
        </Button>
      </View>
    </CenteredView>
  );
};

export default LoginView;
