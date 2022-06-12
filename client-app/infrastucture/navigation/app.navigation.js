import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen from '../../pages/dashboard/dashboard.page';
import BarCodeScanScreen from '../../pages/dashboard/scan.page';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => (

    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#E85D04' }}>
        <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
            }}
        />
         <Tab.Screen
            name="Scan"
            component={BarCodeScanScreen}
            options={{
                tabBarLabel: 'Scan N Order',
                tabBarIcon: ({ color, size }) => <IconMat name="qr-code-scanner" color={color} size={size} />,
            }}
        />


       
    </Tab.Navigator>
);
