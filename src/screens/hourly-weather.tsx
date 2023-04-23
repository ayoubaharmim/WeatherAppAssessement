import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCityState} from '../core';
import {useWeatherByCity} from '../api';
import {WeatherCard} from '../components';
import {useNavigation} from '@react-navigation/native';

export const HourlyWeather = () => {
  const insets = useSafeAreaInsets();
  const {goBack} = useNavigation();

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
      <TouchableOpacity style={styles.changeCity} onPress={goBack}>
        <Text style={styles.label}>Change City</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9',
    alignItems: 'center',
  },
  changeCity: {
    backgroundColor: '#212A3E',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  label: {
    color: 'white',
  },
});
