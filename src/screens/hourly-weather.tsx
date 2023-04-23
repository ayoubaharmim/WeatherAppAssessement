import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCityState} from '../core';
import {useWeatherByCity} from '../api';

export const HourlyWeather = () => {
  const insets = useSafeAreaInsets();

  const {cityState} = useCityState();
  const {city} = cityState;

  const {data: currentWeather} = useWeatherByCity(city);

  console.warn(currentWeather);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Text>Hourly Weather Screen</Text>
    </View>
  );
};
