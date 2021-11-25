import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components';

// #region styled-component 부분

const CenteredView = styled.SafeAreaView`
  flex: 1;
`;

const MenuView = styled.View`
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 35px;
`;

const HeaderView = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 15px;
  margin-right: 20px;
`;

const ProfileButton = styled.TouchableOpacity`
  align-items: center;
`;

const MenuButton = styled.TouchableOpacity`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 5px;
  width: 80%;
  height: 35%;
  color: #FFFFFF;
`;

const Text1 = styled.Text`
font-size: 50px;
font-family: 'BMHANNAProOTF';
`;

// #endregion


const MainView = () => {
    const navigation = useNavigation();

    return (
    <CenteredView>
      <HeaderView>
        <ProfileButton onPress={()=> navigation.navigate('Profile')}>
          <Image source={require('../assets/images/sky.jpeg')} style={{width:50, height:50, borderRadius:20}}></Image>
          <Text>name</Text>
        </ProfileButton>
      </HeaderView>
      <MenuView>
        <MenuButton title="Timer" style={{ backgroundColor: '#FFA7A7' }} onPress={() => navigation.navigate('Timer')}><Text1>타이머</Text1></MenuButton>
        <MenuButton title="" style={{ backgroundColor: '#B2EBF4' }} onPress={()=> navigation.navigate('Schedule')}><Text1>일정관리</Text1></MenuButton>
        <MenuButton title="" style={{ backgroundColor: '#BDBDBD' }} onPress={()=> navigation.navigate('Setting')}><Text1>설정</Text1></MenuButton>
      </MenuView>
    </CenteredView>
    );
}

export default MainView;