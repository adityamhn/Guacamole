import React from "react";
import { useFonts } from "expo-font";
import { Navigation } from "./infrastucture/navigation";
import 'react-native-gesture-handler';

export default function App() {

  const [fontsLoaded] = useFonts({
    Dinosaur: require("./fonts/Dinosaur.otf"),
    PoppinsRegular: require("./fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
       <>
       <Navigation />
    </>
  );
}


