import React from "react";
import { useFonts } from "expo-font";
import { Navigation } from "./infrastucture/navigation";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import store from "./store";

const persistor = persistStore(store);

import "react-native-gesture-handler";

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}
