import React, { useState, useEffect } from "react";

import styled from "styled-components";

const CenteredView = styled.SafeAreaView`
  background-color: white;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const ProfileName = styled.TextInput`
  background-color: #eaeaea;
  font-size: 20px;
  width: 60%;
  height: 7%;
  border-radius: 30px;
  padding: 15px;
  margin-bottom: 30px;
`;

const ImageChange = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;
const NameChange = styled.TouchableOpacity`
  width: 50px;
  height: 40px;
  background-color: #eaeaea;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: black;
  font-size: 14px;
`;

const Image = styled.Image``;

const Profile = () => {
  const [profileImage, setProfileImage] = useState();
  const [profileName, setProfileName] = useState();

  return (
    <CenteredView>
      <ProfileImage
        source={require("../assets/images/sky.jpeg")}
      ></ProfileImage>
      <ImageChange>
        <Image></Image>
      </ImageChange>
      <ProfileName></ProfileName>
      <NameChange>
        <Text>변경</Text>
      </NameChange>
    </CenteredView>
  );
};
export default Profile;
