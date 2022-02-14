import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

const MenuBar = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-bottom-width: 0.3px;
  border-color: grey;
`;

const ArrowImage = styled.Image`
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 20px;
`;

const MenuText = styled.Text`
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Setting = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <MenuBar onPress={() => navigation.navigate("Theme")}>
        <MenuText>테마</MenuText>
        <ArrowImage source={require("../assets/images/arrow.png")}></ArrowImage>
      </MenuBar>
      <MenuBar onPress={() => navigation.navigate("QNA")}>
        <MenuText>문의하기</MenuText>
        <ArrowImage source={require("../assets/images/arrow.png")}></ArrowImage>
      </MenuBar>
      <MenuBar activeOpacity={1}>
        <MenuText>버전정보</MenuText>
        <Text style={{ color: "grey", fontSize: 17 }}>1.0</Text>
      </MenuBar>
    </ScrollView>
  );
};
export default Setting;
