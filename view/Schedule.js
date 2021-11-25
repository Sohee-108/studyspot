import React, { Component, useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import {Agenda} from 'react-native-calendars';

// #region styled-component 부분

const CenteredView = styled.SafeAreaView`
    flex: 1;
`;

const ButtonView = styled.View`
    align-items: flex-end;
    margin-right: 20px;
`;

const AddButton = styled.TouchableOpacity`
    width:60px;
    height:45px;  
    align-items: center;
    justify-content: center;
    margin-right:5%;
    border-radius: 10px;
    background-color: #D4F4FA;
`;

const AddText = styled.Text`
    font-size: 20;
`;

// #endregion

const Schedule = () => {
    const navigation = useNavigation();

    return (
        <CenteredView>
            <Agenda style={{}} 
            items={{
                '2021-11-23': [{name: 'item 2 - any js object'}],
                '2021-11-24': [],
                '2021-11-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
            }}

            renderItem={(items, firstItemInDay) => {
                return (
                <View>
                    <Text>{items.name}</Text>
                </View>);}}/>

            <ButtonView onPress={{Add}}>
                <AddButton onPress={()=> navigation.navigate('ScheduleAdd')}><AddText>추가</AddText></AddButton>
            </ButtonView>
        </CenteredView>
    );
}

export default Schedule;