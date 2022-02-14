import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import {} from "react-native";

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
  border-radius: 40px;
  width: 80px;
  height: 80px;
  margin: 30px;
  align-items: center;
  justify-content: center;
`;

const CBText = styled.Text`
  font-size: 15px;
  font-family: "BMHANNAPro";
`;

/* const images = [
  "/Users/choesohui/Project/ReactNative/studyspot/assets/images/lightmode.png",
  "/Users/choesohui/Project/ReactNative/studyspot/assets/images/darkmode.png",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height; */

const Theme = () => {
  const color = ["#e86464", "#2478FF", "#FFDF24"]; //R, B, Y
  var [currentColor, setCurrentColor] = useState(color[0]);

  const redTheme = () => {
    currentColor = color[0];
    setCurrentColor(currentColor);
  };

  const blueTheme = () => {
    currentColor = color[1];
    setCurrentColor(currentColor);
  };

  const yellowTheme = () => {
    currentColor = color[2];
    setCurrentColor(currentColor);
  };

  /*const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  }; */
  return (
    <CenteredView>
      <ChangeButton style={{ backgroundColor: color[0] }} onPress={redTheme}>
        <CBText>Red</CBText>
      </ChangeButton>
      <ChangeButton style={{ backgroundColor: color[1] }} onPress={blueTheme}>
        <CBText>Blue</CBText>
      </ChangeButton>
      <ChangeButton style={{ backgroundColor: color[2] }} onPress={yellowTheme}>
        <CBText>Yellow</CBText>
      </ChangeButton>
      <ChangeButton style={{ backgroundColor: currentColor }}>
        <CBText>Test</CBText>
      </ChangeButton>
      {/*<View style={styles.wrap1}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap2}
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
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
          */}
    </CenteredView>
  );
};

/* const styles = StyleSheet.create({
  wrap1: {
    width: WIDTH * 0.85,
    height: HEIGHT * 0.75,
    borderWidth: 1,
  },

  wrap2: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.7,
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
    justifyContent: "center",
    alignContent: "center",
  },
}); */

export default Theme;
