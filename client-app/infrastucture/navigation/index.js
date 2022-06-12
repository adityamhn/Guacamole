import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PreLoginNavigator } from "./prelogin.navigation";
import { AppNavigator } from "./app.navigation";
import { BACKGROUND_COLOR } from "../../constants";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { MenuNavigator } from "./menu.navigation";


export const Navigation = () => {
    return (
        <>
        
        <NavigationContainer>
            {/* <PreLoginNavigator /> */}
            <MenuNavigator />
        </NavigationContainer>
        <ExpoStatusBar style="auto" backgroundColor={BACKGROUND_COLOR} />
        </>
    );
};