import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tab-navigator';
import {Main} from '../screens';

export type MainParamList = {
  pageOne: undefined;
  pageTwo: undefined;
};

const Stack = createNativeStackNavigator<MainParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="pageOne" component={Main} />
      <Stack.Screen name="pageTwo" component={TabNavigator} />
    </Stack.Navigator>
  );
};
