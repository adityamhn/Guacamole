// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { AppRegistry } from "react-native";

import React from "react";
import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Navigation } from "./infrastructure/index";
import store from "./app/store";

import { Provider } from "react-redux";

export default function App() {
  // Dinosaur: require("./fonts/Dinosaur.otf"),

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
        <Navigation />
      </Provider>
    </>
  );
}

AppRegistry.registerComponent("App", () => App);
