import React, { useCallback, useRef, useState } from "react";
import {
  BackgroundImage,
  MainCarousel,
  WelcomeText,
  TitleText,
  OrangeText,
  GeneralButton,
} from "./prelogin.styles";
import { Dimensions, Image, View } from "react-native";
// import { Slide } from '../../components/prelogin/Slide.component';
// import { slideList } from '../../components/prelogin/slideList';
// import { Pagination } from "../../components/prelogin/Pagination-component";
import { SafeArea } from "../../components/SafeArea.component";
// import { Carousel } from "react-native-ui-lib/src/components/carousel";

import burger from "../../assets/burger.png";
import { Button, Colors } from "react-native-ui-lib";

const windowWidth = Dimensions.get("window").width;

const PreLoginScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback((event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const indexCount = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(indexCount);

    const distance = Math.abs(roundIndex - indexCount);

    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  const flatListOptimizationProps = {
    initialNumToRender: 1,
    maxToRenderPerBatch: 1,
    removeClippedSubviews: true,
    scrollEventThrottle: 16,
    windowSize: 1,
    keyExtractor: useCallback((e) => e.id, []),
    getItemLayout: useCallback(
      // eslint-disable-next-line no-shadow
      (_, index) => ({
        index,
        length: windowWidth,
        offset: index * windowWidth,
      }),
      []
    ),
  };

  const slideList = [
    {
      id: "1",
      image: burger,
    },
    // {
    //   id: "2",
    //   image: burger,
    // },
    // {
    //   id: "3",
    //   image: burger,
    // },
  ];

  return (
    <>
      <SafeArea out>
        <BackgroundImage>
          <Image
            source={require("../../assets/guac.png")}
            style={
              {
                // width: 30,
                // height: 30,
              }
            }
          />
          <WelcomeText>GUACAMOL</WelcomeText>
          {[require("../../assets/burger.png")].map((item, idx) => (
            <React.Fragment key={idx}>
              <Image
                source={item}
                style={{
                  margin: 12,
                }}
              />
              <TitleText>
                The New <OrangeText>Dine In</OrangeText> Experience
              </TitleText>
            </React.Fragment>
          ))}

          {/* <GeneralButton>
            <TitleText>Get Started</TitleText>
          </GeneralButton> */}
          {/* <MainCarousel
            data={slideList}
            renderItem={({ item }) => {
              console.log("item", item);
              return (
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <Image source={item.image} />
                  <TitleText>
                    The New <OrangeText>Dine In</OrangeText> Experience
                  </TitleText>
                </View>
              );
            }}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            {...flatListOptimizationProps}
          /> */}
          <Button
            style={{
              marginTop: 35,
              width: "80%",
            }}
            labelStyle={{
              fontSize: 12,
              fontWeight: "600",
              fontFamily: "PoppinsBold",
              paddingTop: 4,
            }}
            label={"Get Started"}
            size={Button.sizes.large}
            borderRadius={8}
            backgroundColor={Colors.orange30}
          />
        </BackgroundImage>
      </SafeArea>
    </>
  );
};

export default PreLoginScreen;
