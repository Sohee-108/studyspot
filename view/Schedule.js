import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

import styled from "styled-components";
import { Agenda } from "react-native-calendars";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

import currentColor from "./Main";

// #region styled-component 부분

const CalendarView = styled.SafeAreaView`
  flex: 1;
`;

const AddScheduleView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AgendaView = styled.View`
  background-color: white;
  justify-content: center;
  width: 90%;
  height: 75px;
  margin-top: 5%;
  border-radius: 10px;
`;

const ButtonView = styled.View`
  align-items: flex-end;
  margin-right: 20px;
`;

const AddButton1 = styled.TouchableOpacity`
  width: 70px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
  margin-bottom: 10%;
  border-radius: 10px;
  background-color: #8c8c8c;
`;

const AddText = styled.Text`
  font-size: 23px;
  color: white;
`;
const AddButton2 = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #8c8c8c;
  margin-top: 10px;
`;

const AddValue = styled.TextInput`
  background-color: white;
  font-size: 20px;
  width: 80%;
  height: 7%;
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 30px;
`;

const SceduleBtn = styled.TouchableOpacity`
  justify-content: center;
  padding: 10px;
`;

const SceduleTxt = styled.Text`
  font-size: 25px;
  font-family: "BMHANNAPro";
`;
// #endregion

const Schedule = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [scheduleList, setScheduleList] = useState({});
  const [currentItem, setcurrentItem] = useState({});
  const [currentId, setcurrentId] = useState();
  const [currentDay, setcurretndDay] = useState();

  var [id, setId] = useState(1);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  //Modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //일정추가
  const addSchedule = () => {
    try {
      // 여기서부터 scheduleList에 값 추가
      var _scheduleList = { ...scheduleList };
      if (_scheduleList[day]) {
        id = id + 1;
        _scheduleList[day].push({ id, time, name, content });
      } else {
        _scheduleList[day] = [{ id, time, name, content }];
      }

      const jsonValue = JSON.stringify(_scheduleList);
      console.log(_scheduleList);
      AsyncStorage.setItem("@spot_key", jsonValue);

      setScheduleList(scheduleList);
      toggleModal();
      getData();
      allClear();
    } catch (e) {
      console.log("err: " + e);
    }
  };

  //일정 추가 모달 내용 초기화
  const allClear = () => {
    setDay("");
    setTime("");
    setName("");
    setContent("");
  };

  //일정 삭제 알림창
  const deleteAlert = () => {
    Alert.alert(
      "삭제",
      "일정을 삭제하시겠습니까?",
      [
        {
          text: "네",
          onPress: () => {
            removeValue();
          },
        },
        {
          text: "아니오",
          onPress: () => console.log("아니오"),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  //일정 삭제
  const removeValue = async (day, id) => {
    var _scheduleList = { ...scheduleList };
    try {
      if (_scheduleList.id === id && _scheduleList.day === day) {
        await AsyncStorage.removeItem("@spot_key");

        setScheduleList(scheduleList);
        getData();
      }
    } catch (e) {
      // remove error
      console.log("err: " + e);
    }

    console.log("삭제완료");
  };

  //Async Storage 전체 삭제
  /* const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("@spot_key");
    } catch (e) {
      // remove error
      console.log("err: " + e);
    }

    console.log("Done.");
  }; */

  //일정 가져오기
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@spot_key");
      console.log(value);
      if (value !== null) {
        setScheduleList(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
      console.log("err: " + e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CalendarView>
      <Agenda
        theme={{
          selectedDayBackgroundColor: "#8C8C8C",
          selectedDayTextColor: "white",
          todayTextColor: "#8C8C8C",
          dotColor: "#8C8C8C",
          agendaDayTextColor: "#8C8C8C",
          agendaDayNumColor: "#8C8C8C",
          agendaTodayColor: "#8C8C8C",
          agendaKnobColor: "#8C8C8C",
        }}
        showClosingKnob={true}
        items={scheduleList}
        renderItem={(items) => {
          return (
            <AgendaView>
              <SceduleBtn
                onLongPress={() => {
                  console.log(items);
                }}
                /*} onLongPress={({ id, day }) => {
                  if (id != currentId && day != currentDay) {
                    setcurrentId(id);
                    setcurretndDay(day);
                    console.log(currentId);
                    console.log(currentDay);
                  }
                }}*/
              >
                <SceduleTxt>
                  {items.name} ({items.time})
                </SceduleTxt>
                <SceduleTxt>{items.content}</SceduleTxt>
              </SceduleBtn>
            </AgendaView>
          );
        }}
      />

      <ButtonView>
        <AddButton1 onPress={toggleModal}>
          <AddText>추가</AddText>
        </AddButton1>
        <Modal isVisible={isModalVisible}>
          <AddScheduleView>
            <AddValue
              placeholder="날짜를 입력하세요. ex)2021-05-13"
              value={day}
              onChangeText={setDay}
            ></AddValue>
            {/* <TouchableOpacity style={{backgroundColor:'black'}} onPress={MinCalendar}><Text>달력</Text></TouchableOpacity> */}
            <AddValue
              placeholder="시간을 입력하세요. ex)17:00~20:00"
              value={time}
              onChangeText={setTime}
            ></AddValue>
            <AddValue
              placeholder="일정명을 입력하세요."
              title="name"
              value={name}
              onChangeText={setName}
            ></AddValue>
            <AddValue
              placeholder="일정내용을 입력하세요."
              value={content}
              onChangeText={setContent}
            ></AddValue>
            <AddButton2
              title="add"
              onPress={() => {
                addSchedule();
              }}
            >
              <AddText>일정 추가</AddText>
            </AddButton2>
            <AddButton2 title="back" onPress={toggleModal}>
              <AddText>취소</AddText>
            </AddButton2>
          </AddScheduleView>
        </Modal>
      </ButtonView>
    </CalendarView>
  );
};

export default Schedule;
