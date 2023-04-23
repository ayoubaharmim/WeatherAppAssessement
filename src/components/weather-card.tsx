import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {WeatherResponse} from '../api';

type TProps = {
  weather: WeatherResponse;
  city: string;
};

export const WeatherCard = ({city, weather}: TProps) => {
  return (
    <View style={styles.container}>
      <Text>{city}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
        }}
        style={styles.weatherIcon}
      />
      <Text>{`${weather.main.feels_like} °C`}</Text>
      <Text>{`Humidity: ${weather.main.humidity} %`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9BA4B5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    shadowOpacity: 2,
  },
  weatherIcon: {width: 100, height: 100},
});
