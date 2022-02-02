import React from "react";

import { useNavigation } from "@react-navigation/native";

import styled from "styled-components";

// #region styled-component 부분

const lightColor = ["white", "#FFA7A7", "#B2EBF4", "#BDBDBD"];
const darkColor = ["#353535", "#DB8383", "#8EC7D0", "#999999"];

const CenteredView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const MenuView = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;

const MenuButton = styled.TouchableOpacity`
  border-radius: 30px;
  border-width: 8px;
  justify-content: center;
  align-items: center;
  margin: 15px;
  width: 80%;
  height: 35%;
  border-color: #ff9494;
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
        <MenuButton title="Timer" onPress={() => navigation.navigate("Timer")}>
          <Text1>타이머</Text1>
        </MenuButton>
        <MenuButton title="" onPress={() => navigation.navigate("Schedule")}>
          <Text1>일정관리</Text1>
        </MenuButton>
        <MenuButton title="" onPress={() => navigation.navigate("Setting")}>
          <Text1>설정</Text1>
        </MenuButton>
      </MenuView>
    </CenteredView>
  );
};

export default MainView;
