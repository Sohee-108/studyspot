import React, { useState } from "react";
import styled from "styled-components";
import { Text, View, styles } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";

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
  background-color: #bdbdbd;
  align-items: center;
  justify-content: center;
`;

const CBText = styled.Text`
  font-size: 15;
  font-family: "BMHANNAPro";
  color: #fcfcfc;
`;

// carousel slider width
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const CAROUSEL_VERTICAL_OUTPUT = 56;
export const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;

const Theme = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = (
    { item } // render every carousel content
  ) => (
    <View style={styles.snapCarouselItem}>
      <View style={styles.carouselItemTitle}>
        {item.renderIcon()}
        <Text style={styles.carouselItemTitleText}>{item.title}</Text>
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>
  );

  const renderPagination = () => (
    // render carousel pagination
    <Pagination
      dotsLength={carouselData.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dotStyle}
      containerStyle={styles.paginationContainer}
    />
  );

  return (
    <View>
      <View>
        <Text>React Native Carousel</Text>
        <View>
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveSlide(index)} // we will update active slide index
            sliderWidth={SCREEN_WIDTH}
            itemWidth={CAROUSEL_ITEM_WIDTH}
          />
        </View>
        {renderPagination()}
      </View>
    </View>

    /* } <CenteredView>
      <ModeImage source={require("../assets/images/lightmode.png")}></ModeImage>
      <ChangeButton>
        <CBText>적용</CBText>
      </ChangeButton>
      <ModeImage source={require("../assets/images/darkmode.png")}></ModeImage>
      <ChangeButton>
        <CBText>적용</CBText>
      </ChangeButton>
  </CenteredView> */
  );
};
export default Theme;
