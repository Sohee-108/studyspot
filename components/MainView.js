import React from 'react';
import { Alert, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { API_URL } from '@env';

import styled from 'styled-components';

// #region styled-component 부분

const CenteredView = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MenuView = styled.View`
  align-items: stretch;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.TouchableOpacity`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 5px;
  width: 150px;
  height: 150px;
  color: #FFFFFF;
`;

const Text1 = styled.Text`
font-size: 30px;
`;
// #endregion


const MainView = () => {
    const navigation = useNavigation();

    return (
        <CenteredView>
      <MenuView>
        <Button title="Timer" style={{ backgroundColor: '#FFA7A7' }} onPress={() => navigation.navigate('Timer')}><Text1>공부시간 측정하기</Text1></Button>
        <Button title="" style={{ backgroundColor: '#B2EBF4' }}><Text1>일정관리</Text1></Button><Button title="" style={{ backgroundColor: '#B7F0B1' }}><Text1>알람</Text1></Button>
        <Button title="" style={{ backgroundColor: '#BDBDBD' }}><Text1>설정</Text1></Button>
        {/* <Button title="" style={{ backgroundColor: '#BDBDBD' }}><Text1>{API_URL}</Text1></Button> */}
      </MenuView>
    </CenteredView>
    );
}

export default MainView;