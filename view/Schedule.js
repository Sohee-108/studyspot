import React, { Component, useState } from 'react';
import { AppRegistry,Text, View,TouchableOpacity } from 'react-native';

import styled from 'styled-components';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CenteredView = styled.SafeAreaView`
    flex: 1;
    background-color: white;
`;

const ButtonView = styled.View`
    align-items: flex-end;
    margin-right: 20px;
`;

const AddButton = styled.TouchableOpacity`
    width:45px;
    height:30px;  
    align-items: center;
    justify-content: center;
`;

const AddText = styled.Text`
    font-size: 20;
`;

const Add = () => {

}

const Schedule = () => {


    return (
        <CenteredView>
            <Agenda style={{}} 
            />
            <ButtonView style={{}} onPress={{Add}}>
                <AddButton><AddText>추가</AddText></AddButton>
            </ButtonView>
        </CenteredView>
    );
}

export default Schedule;