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

import React from "react";
import { useFonts } from "expo-font";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Navigation } from "./infrastrucutre/navigation";
import store from "./app/store";

import { Provider } from "react-redux";

export default function App() {
  const [loaded] = useFonts({
    BasisGrotesqueProBold: require("./fonts/BasisGrotesqueProBold.ttf"),
    BasisGrotesqueProMiddle: require("./fonts/BasisGrotesqueProMedium.ttf"),
  });

  if (!loaded) return null;
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}
