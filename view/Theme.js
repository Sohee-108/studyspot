import React, { useState } from "react";
import styled from "styled-components";

// #region styled-component 부분

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const ChangeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 70px;
  width: 125px;
  height: 125px;
  margin: 30px;
`;

const CBText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

// #endregion
const Theme = () => {
  const color = ["#E5D5C6", "#FFD7D7", "#A77D54"]; //R, B, Y
  var [currentColor, setCurrentColor] = useState(color[0]);

  const beigeTheme = () => {
    currentColor = color[0];
    setCurrentColor(currentColor);
  };

  const pastelTheme = () => {
    currentColor = color[1];
    setCurrentColor(currentColor);
  };

  const woodTheme = () => {
    currentColor = color[2];
    setCurrentColor(currentColor);
  };

  return (
    <CenteredView>
      <ChangeButton style={{ backgroundColor: color[0] }} onPress={beigeTheme}>
        <CBText>Beige</CBText>
      </ChangeButton>
      <ChangeButton style={{ backgroundColor: color[1] }} onPress={pastelTheme}>
        <CBText>Pastel</CBText>
      </ChangeButton>
      <ChangeButton style={{ backgroundColor: color[2] }} onPress={woodTheme}>
        <CBText>Wood</CBText>
      </ChangeButton>
      <ChangeButton style={{ backgroundColor: currentColor }}>
        <CBText>Test</CBText>
      </ChangeButton>
    </CenteredView>
  );
};

export default Theme;
