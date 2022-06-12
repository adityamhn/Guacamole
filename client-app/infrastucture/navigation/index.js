import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PreLoginNavigator } from "./prelogin.navigation";
import { AppNavigator } from "./app.navigation";
import { BACKGROUND_COLOR } from "../../constants";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { MenuNavigator } from "../navigation/menu.navigation";
export const Navigation = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? <MenuNavigator /> : <PreLoginNavigator />}
      </NavigationContainer>
      <ExpoStatusBar style="auto" backgroundColor={BACKGROUND_COLOR} />
    </>
  );
};
