import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

import Carousel from "react-native-snap-carousel";

const CenteredView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const ModeImage = styled.Image`
  width: 160px;
  height: 295px;
`;

const ChangeButton = styled.TouchableOpacity`
  border-radius: 30;
  width: 50px;
  height: 50px;
  margin: 30px;
  background-color: #bdbdbd;
  align-items: center;
  justify-content: center;
`;

const CBText = styled.Text`
  font-size: 15;
  font-family: "BMHANNAPro";
  color: #fcfcfc;
`;

const images = [
  "/Users/choesohui/Project/ReactNative/studyspot/assets/images/lightmode.png",
  "/Users/choesohui/Project/ReactNative/studyspot/assets/images/darkmode.png",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Theme = () => {
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  return (
    <CenteredView>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="stretch"
              style={styles.border}
              source={{ uri: e }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ChangeButton>
          <CBText>라이트</CBText>
        </ChangeButton>
        <ChangeButton>
          <CBText>다크</CBText>
        </ChangeButton>
      </View>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 5,
    color: "black",
  },
  dot: {
    margin: 5,
    color: "white",
  },
  border: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.7,
    borderRadius: 30,
  },
});

export default Theme;
