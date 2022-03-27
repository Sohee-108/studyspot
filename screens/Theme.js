import React, { useState } from "react";
import styled from "styled-components";

// #region styled-component 부분

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// #endregion
const Theme = () => {
  return <CenteredView></CenteredView>;
};

export default Theme;
