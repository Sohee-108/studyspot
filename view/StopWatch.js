import { map } from "lodash";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Stopwatch } from "react-native-stopwatch-timer";
import styled from "styled-components";

// #region styled-component 부분

const CenteredView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const StopwatchView = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 5%;
  padding-left: 100%;
  padding-right: 100%;
`;

const ButtonView = styled.View`
  flex-direction: row;
`;

const SignButton = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  width: 140px;
  height: 75px;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const SignText = styled.Text`
  font-size: 40px;
  font-family: "BMHANNAPro";
`;

const LapsButton = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const LapsButtonText = styled.Text`
  font-size: 30px;
  font-family: "BMHANNAPro";
`;

const LapsText = styled.Text`
  font-size: 40px;
  font-family: "BMHANNAPro";
  line-height: 45px;
  letter-spacing: 1px;
  width: 175px;
  align-items: center;
  justify-content: center;
  margin-left: 25%;
`;

const options = {
  container: {
    width: 340,
    height: 110,
    borderRadius: 10,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 80,
    fontFamily: "BMHANNAPro",
    color: "black",
  },
};

// #endregion

const StopWatchAPI = ({}) => {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const [laps, setLaps] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  var paste = "";
  const toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  };

  const resetStopwatch = () => {
    setStart(false);
    setReset(true);
  };

  const lapsStopwatch = () => {
    console.log("currentTime: ", currentTime);
    laps.push(currentTime);
    setLaps(laps);
    console.log(laps);
  };

  const lapsClear = () => {
    setLaps([]);
    console.log(laps);
  };

  return (
    <CenteredView>
      <StopwatchView>
        <Stopwatch
          laps={true}
          start={start}
          reset={reset}
          options={options}
          getTime={(time) => {
            if (time != currentTime) {
              setCurrentTime(time);
            }
          }}
        ></Stopwatch>
      </StopwatchView>
      <ButtonView>
        <SignButton onPress={toggleStopwatch}>
          <SignText>{!start ? "Start" : "Stop"}</SignText>
        </SignButton>
        <SignButton onPress={resetStopwatch}>
          <SignText>Reset</SignText>
        </SignButton>
      </ButtonView>
      <ButtonView>
        <LapsButton onPress={lapsStopwatch}>
          <LapsButtonText>Laps</LapsButtonText>
        </LapsButton>
        <LapsButton onPress={lapsClear}>
          <LapsButtonText>Clear</LapsButtonText>
        </LapsButton>
      </ButtonView>
      <Text style={{ fontSize: 15, fontFamily: "BMHANNAPro", padding: 15 }}>
        기록
      </Text>

      <ScrollView
        style={{
          width: "100%",
          backgroundColor: "white",
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <LapsText>{laps}</LapsText>
      </ScrollView>
    </CenteredView>
  );
};

export default StopWatchAPI;
