import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ChartsWeather, HourlyWeather} from '../screens';
import {ChartIcon, ForeCastIcon} from '../icons';

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
        options={{
          headerShown: false,
          title: 'Forecast',
          tabBarIcon: () => <ForeCastIcon />,
        }}
      />
      <Tab.Screen
        name="Daily"
        component={ChartsWeather}
        options={{
          headerShown: false,
          title: 'Chart',
          tabBarIcon: () => <ChartIcon />,
        }}
      />
    </Tab.Navigator>
  );
};
