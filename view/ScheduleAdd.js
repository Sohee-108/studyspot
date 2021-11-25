import React, { Component, useState } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-navigation';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

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

const ScheduleAdd = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex:1,backgroundColor:''}}>
            <AddButton title="back" onPress = {()=> navigation.navigate('Schedule')}>
                <AddText>추가</AddText>
            </AddButton>
        </SafeAreaView>
    );
}

export default ScheduleAdd;