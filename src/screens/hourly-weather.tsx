import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCityState} from '../core';
import {useWeatherByCity} from '../api';
import {WeatherCard} from '../components';

export const HourlyWeather = () => {
  const insets = useSafeAreaInsets();

  const {cityState} = useCityState();
  const {city} = cityState;

  const {data: currentWeather, isLoading: currentWeatherLoading} =
    useWeatherByCity(city);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.container,
      }}>
      {currentWeatherLoading && currentWeather === undefined ? (
        <ActivityIndicator color="#9BA4B5" />
      ) : (
        <WeatherCard city={city} weather={currentWeather!} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9',
    alignItems: 'center',
  },
});
