import React, { Component, useState } from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';

import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import {Agenda, Calendar} from 'react-native-calendars';
import Modal from "react-native-modal";

const MinCalendar = () => {
        const [isModalVisible, setModalVisible] = useState(false);

        const toggleModal = () => {
        setModalVisible(!isModalVisible);
        };

        return(
            <Modal isVisible={isModalVisible}>
            <View><Calendar></Calendar></View>
            </Modal>
        )
    }

    export default MinCalendar;