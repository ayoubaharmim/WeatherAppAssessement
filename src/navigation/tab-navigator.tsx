import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {DailyWeather, HourlyWeather} from '../screens';

type TabParamList = {
  Hourly: undefined;
  Weekly: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hourly" component={HourlyWeather} />
      <Tab.Screen name="Weekly" component={DailyWeather} />
    </Tab.Navigator>
  );
};
