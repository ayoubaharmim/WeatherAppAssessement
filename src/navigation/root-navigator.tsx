import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigator';
import {Main} from '../screens';

export type MainParamList = {
  main: undefined;
  forecast: undefined;
};

const Stack = createNativeStackNavigator<MainParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="forecast" component={TabNavigator} />
    </Stack.Navigator>
  );
};
