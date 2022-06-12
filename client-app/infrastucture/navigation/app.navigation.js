import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import DashboardScreen from '../../pages/dashboard/dashboard.page';
import BarCodeScanScreen from '../../pages/dashboard/scan.page';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => (

    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#1d1d1d' }}>
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
                tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
            }}
        />

       
    </Tab.Navigator>
);
