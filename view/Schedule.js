import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import styled from "styled-components";
import { Agenda } from "react-native-calendars";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";

// #region styled-component 부분

const CalendarView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const AgendaView = styled.View`
  background-color: white;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 75px;
  padding-left: 5%;
  margin-top: 5%;
  border-radius: 30px;
  border-width: 0.7px;
  border-color: #313131;
`;

const SceduleBtn = styled.TouchableOpacity`
  justify-content: center;
  padding: 10px;
`;

const ScheduleTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #313131;
`;

const ScheduleContent = styled.Text`
  margin-left: 2%;
  margin-top: 2%;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #313131;
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
`;

const AddImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const AddScheduleView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AddText = styled.Text``;
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

// #endregion

const Schedule = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [scheduleList, setScheduleList] = useState({});
  const [deleteItem, setDeleteItem] = useState({});
  const [currentItem, setCurrentItem] = useState({});

  var [id, setId] = useState(1);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  //Modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //일정 추가 모달 내용 초기화
  const allClear = () => {
    setDay("");
    setTime("");
    setName("");
    setContent("");
  };

  //일정 추가
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

  //일정 가져오기
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@spot_key");
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
    console.log(items);
    // try {
    //   if (_scheduleList.id === id && _scheduleList.day === day) {
    //     await AsyncStorage.removeItem("@spot_key");

    //     setScheduleList(scheduleList);
    //     getData();
    //   }
    // } catch (e) {
    //   // remove error
    //   console.log("err: " + e);
    // }

    console.log("삭제완료");
  };

  const check = () => {
    console.log(items);
  };

  const getSelectItem = () => {
    if (items != currentItem) {
      setCurrentItem(items);
    }
  };

  return (
    <CalendarView>
      <Agenda
        // 의제에 표시되어야 하는 항목의 목록입니다. 항목을 빈 날짜로 렌더링하려면
        // 날짜 키의 값은 빈 배열 []이어야 합니다. 날짜 키에 대한 값이 없으면
        // 해당 날짜가 아직 로드되지 않은 것으로 간주됩니다.

        theme={{
          selectedDayBackgroundColor: "#8C8C8C",
          selectedDayTextColor: "white",
          todayTextColor: "#8C8C8C",
          dotColor: "#8C8C8C",
          agendaDayTextColor: "#8C8C8C",
          agendaDayNumColor: "#8C8C8C",
          agendaTodayColor: "#8C8C8C",
          agendaKnobColor: "#8C8C8C",
          backgroundColor: "#ffffff",
        }}
        showClosingKnob={true}
        items={scheduleList}
        onDayChange={(day) => {
          console.log(day.dateString);
        }}
        renderItem={(items) => {
          return (
            <AgendaView>
              <SceduleBtn onLongPress={getSelectItem}>
                <ScheduleTitle>
                  {items.name} ({items.time})
                </ScheduleTitle>
                <ScheduleContent>{items.content}</ScheduleContent>
              </SceduleBtn>
            </AgendaView>
          );
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        // renderDay={(day, item) => {
        //   return (
        //     <View>
        //       <Text>hi</Text>
        //     </View>
        //   );
        // }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <AgendaView />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <AgendaView />;
        }}
      />

      <ButtonView>
        <AddButton1 onPress={toggleModal}>
          <AddImage
            source={require("../assets/images/addscheduleIcon.png")}
          ></AddImage>
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
