import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PreLoginScreen from "../../pages/preLogin/preLogin.page";
import LoginScreen from "../../pages/auth/login.page";
import RegisterScreen from "../../pages/auth/register.page";

const Stack = createStackNavigator();

export const PreLoginNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PreLogin" component={PreLoginScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
);
