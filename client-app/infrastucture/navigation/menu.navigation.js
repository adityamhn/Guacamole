import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuScreen from "../../pages/menu/menu.page";
import BarCodeScanScreen from "../../pages/dashboard/scan.page";
import { AppNavigator } from "./app.navigation";
import OrderSuccessScreen from "../../pages/menu/orderSuccess.page";
import PaymentScreen from "../../pages/payment/payment.page";


const Stack = createStackNavigator();

export const MenuNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Dashboard" component={AppNavigator} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />


    </Stack.Navigator>
);
