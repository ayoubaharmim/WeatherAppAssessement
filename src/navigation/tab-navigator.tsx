import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ChartsWeather, HourlyWeather} from '../screens';

type TabParamList = {
  Hourly: undefined;
  Daily: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Hourly"
        component={HourlyWeather}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Daily"
        component={ChartsWeather}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
