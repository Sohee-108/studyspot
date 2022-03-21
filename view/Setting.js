import React from "react";
import styled from "styled-components";
import { useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";

// #region styled-component 부분

const CenteredView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ProfileView = styled.View`
  flex: 0.3;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 200px;
  align-items: center;
  background-color: ${(props) => props.theme.basicColor};
`;

const ProfileImage = styled.Image`
  position: absolute;
  top: 13px;
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;

const ProfileName = styled.Text`
  position: absolute;
  top: 95px;
  font-style: normal;
  font-weight: 800;
  font-size: 17px;
  line-height: 18px;
  color: ${(props) => props.theme.textColor};
`;

const ProfileEmail = styled.Text`
  position: absolute;
  top: 120px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => props.theme.emailText};
`;

const MenuView = styled.View`
  flex: 0.7;
  position: absolute;
  top: 150px;
  width: 100%;
  height: 80%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px;
  border-bottom-width: 0.3px;
  border-color: ${(props) => props.theme.menuBorderBottom};
`;

const MenuIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

const MenuText = styled.Text`
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.menuText};
`;

const ArrowIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const LogoutIcon = styled.Image`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const LogoutText = styled.Text`
  position: absolute;
  top: 75%;
  left: 13%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.logoutButtonText};
`;

const VerText = styled.Text`
  position: absolute;
  top: 75%;
  left: 80%;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.versionText};
`;

// #endregion

const Setting = () => {
  const navigation = useNavigation();
  const isLight = useColorScheme() === "light";

  return (
    <CenteredView>
      {/* 추후에 구글로그인 후 user를 통해 정보를 받아오는 방식으로 변경 */}
      <ProfileView>
        <ProfileImage
          source={require("../assets/images/sky.jpeg")}
        ></ProfileImage>
        <ProfileName>소희</ProfileName>
        <ProfileEmail>dnflwlqsh@gmail.com</ProfileEmail>
      </ProfileView>

      <MenuView>
        <MenuButton onPress={() => navigation.navigate("Theme")}>
          <MenuIcon
            source={
              isLight
                ? require("../assets/images/icon/lightmode/themeBlack.png")
                : require("../assets/images/icon/darkmode/themeWhite.png")
            }
          ></MenuIcon>
          <MenuText>Theme</MenuText>
          <ArrowIcon
            source={
              isLight
                ? require("../assets/images/icon/lightmode/arrowrightBlack.png")
                : require("../assets/images/icon/darkmode/arrowrightWhite.png")
            }
          ></ArrowIcon>
        </MenuButton>
        <MenuButton onPress={() => navigation.navigate("Support")}>
          <MenuIcon
            source={
              isLight
                ? require("../assets/images/icon/lightmode/supportBlack.png")
                : require("../assets/images/icon/darkmode/supportWhite.png")
            }
          ></MenuIcon>
          <MenuText>Support</MenuText>
          <ArrowIcon
            source={
              isLight
                ? require("../assets/images/icon/lightmode/arrowrightBlack.png")
                : require("../assets/images/icon/darkmode/arrowrightWhite.png")
            }
          ></ArrowIcon>
        </MenuButton>
        <LogoutButton>
          <LogoutIcon
            source={
              isLight
                ? require("../assets/images/icon/lightmode/logoutBlack.png")
                : require("../assets/images/icon/darkmode/logoutWhite.png")
            }
          ></LogoutIcon>
          <LogoutText>Logout</LogoutText>
          <VerText>version 1.0</VerText>
        </LogoutButton>
      </MenuView>
    </CenteredView>
  );
};
export default Setting;
