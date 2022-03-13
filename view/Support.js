import React from "react";
import styled from "styled-components";

// #region styled-component 부분

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  left: 25px;
  top: 150px;
  width: 340px;
  height: 340px;
  opacity: 0.3;
`;

const SupportText = styled.Text`
  position: absolute;
  top: 600px;
  font-style: normal;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #313131;
`;

// #endregion

const Support = () => {
  return (
    <CenteredView>
      <BackgroundImage
        source={require("../assets/images/splash.png")}
      ></BackgroundImage>
      <SupportText>
        email - dnflwlq004@naver.com {"\n"}
        Made by @SHS-1081
      </SupportText>
    </CenteredView>
  );
};

export default Support;
