import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useCityState } from "../core";

export const Main = () => {
  const insets = useSafeAreaInsets();
  const {cityState} = useCityState();
  console.warn(cityState);
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text>Main Screen</Text>
    </View>
  );
};
