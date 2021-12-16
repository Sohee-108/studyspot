import React, { useState } from "react";
import { Text } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import styled from "styled-components";

const CenteredView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const StartButton = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  width: 150px;
  height: 80px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 9%;
  top: 30%;
`;

const ResetButton = styled.TouchableOpacity`
  border-width: 2px;
  border-radius: 10px;
  width: 150px;
  height: 80px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 9%;
  top: 30%;
`;

const options = {
  container: {
    width: 350,
    height: 120,
    borderRadius: 10,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "8%",
    alignSelf: "center",
  },
  text: {
    fontSize: 80,
    color: "black",
  },
};

const StopWatchAPI = ({}) => {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);

  toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  };

  resetStopwatch = () => {
    setStart(false);
    setReset(true);
  };

  return (
    <CenteredView>
      <Stopwatch
        laps
        start={start}
        reset={reset}
        options={options}
        getTime={(time) => {
          console.log(time);
        }}
      />
      <StartButton onPress={toggleStopwatch}>
        <Text style={{ fontSize: 50 }}>{!start ? "Start" : "Stop"}</Text>
      </StartButton>
      <ResetButton onPress={resetStopwatch}>
        <Text style={{ fontSize: 50 }}>Reset</Text>
      </ResetButton>
    </CenteredView>
  );
};

export default StopWatchAPI;
