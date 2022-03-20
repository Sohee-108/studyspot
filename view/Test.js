import React from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { useColorScheme } from "react-native";
import styled from "styled-components";

const View1 = styled.SafeAreaView`
  background-color: ${(props) => props.theme.bgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
`;

const Test = () => {
  return (
    <View1 style={{ alignItems: "center", justifyContent: "center" }}>
      <Title>Hi</Title>
      <Button title="hi"></Button>
    </View1>
  );
};

export default Test;
