import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { AppNavigator } from "./app.navigator";

const Stack = createStackNavigator();

export const UserNavigator = () => (
  <Stack.Navigator wscreenOptions={{ headerShown: false }}>
    <Stack.Screen name="AppNav" component={AppNavigator} />
  </Stack.Navigator>
);
