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
        options={{headerShown: false, title: 'Forecast'}}
      />
      <Tab.Screen
        name="Daily"
        component={ChartsWeather}
        options={{headerShown: false, title: 'Chart'}}
      />
    </Tab.Navigator>
  );
};
