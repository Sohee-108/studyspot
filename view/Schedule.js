import React, { Component, useState } from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import {Agenda} from 'react-native-calendars';
import Modal from "react-native-modal";

// #region styled-component 부분

const CenteredView1 = styled.SafeAreaView`
    flex:1;
`;

const CenteredView2 = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
`;

const ButtonView = styled.View`
    align-items: flex-end;
    margin-right: 20px;
`;

const AddButton1 = styled.TouchableOpacity`
    width:70px;
    height:50px;  
    align-items: center;
    justify-content: center;
    margin-right:5%;
    margin-bottom: 10%;
    border-radius: 10px;
    background-color: #001EC9;
`;

const AddText = styled.Text`
    font-size: 23px;
    color: white;
`;
const AddButton2 = styled.TouchableOpacity`
    width:200px;
    height:50px;  
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: #001EC9;
`;

const AddValue = styled.TextInput`
    background-color: white;
    font-size: 20px;
    width:80%;
    height:7%;
    border-radius: 30px;
    padding: 15px;
    margin-bottom: 30px;
`;

// #endregion


const Schedule = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
    setModalVisible(!isModalVisible);
    };

    const [day, setDay] = useState("");
    const getDay = (day) => {
        setDay(day);
    }
    const [time, setTime] = useState("");
    const getTime = (time) => {
        setTime(time);
    }
    const [name, setName] = useState("");
    const getName = (name) => {
        setName(name);
        console.log(setName);
    }
    const [content, setContent] = useState("");
    const getContent = (content) => {
        setContent(content);
    }

    const minCalendar = () => {

        return(
            <View><Calendar></Calendar></View>
        )
    }

    return (
        <CenteredView1>
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

            <ButtonView>
                <AddButton1 onPress={toggleModal}><AddText>추가</AddText></AddButton1>
                <Modal isVisible={isModalVisible}>
                <CenteredView2 style={{flex:1,backgroundColor:''}}>
                    <AddValue placeholder="날짜를 입력하세요. ex)2021-01-03" value={day} onChange={setDay}></AddValue>
                    <TouchableOpacity style={{backgroundColor:'black'}} onPress={minCalendar}><Text>달력</Text></TouchableOpacity>
                    <AddValue placeholder="시간을 입력하세요. ex)17:00~20:00" value={time} onChange={setTime}></AddValue>
                    <AddValue placeholder="일정명을 입력하세요." title="name" value={name} onChange={setName}></AddValue>
                    <AddValue placeholder="일정내용을 입력하세요." value={content} onChange={setContent}></AddValue>
                    <AddButton2 title="back" onPress = {toggleModal}>
                    <AddText>일정 추가</AddText></AddButton2>
                </CenteredView2>
                </Modal>
            </ButtonView>
        </CenteredView1>
    );
}

export default Schedule;