import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import styled from "styled-components";

// #region styled-component 부분

const CenteredView = styled.SafeAreaView`
  background-color: #353535;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const MenuView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const MenuButton = styled.TouchableOpacity`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 5px;
  width: 80%;
  height: 35%;
  color: #ffffff;
`;

const Text1 = styled.Text`
  font-size: 50px;
  font-family: "BMHANNAPro";
`;

// #endregion

const MainView = () => {
  const navigation = useNavigation();

  return (
    <CenteredView>
      <MenuView>
        <MenuButton
          title="Timer"
          style={{ backgroundColor: "#DB8383" }}
          onPress={() => navigation.navigate("Timer")}
        >
          <Text1>타이머</Text1>
        </MenuButton>
        <MenuButton
          title=""
          style={{ backgroundColor: "#8EC7D0" }}
          onPress={() => navigation.navigate("Schedule")}
        >
          <Text1>일정관리</Text1>
        </MenuButton>
        <MenuButton
          title=""
          style={{ backgroundColor: "#999999" }}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text1>설정</Text1>
        </MenuButton>
      </MenuView>
    </CenteredView>
  );
};

export default MainView;
