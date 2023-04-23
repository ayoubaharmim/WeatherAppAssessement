import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCityState} from '../core';
import {HourlyWeatherData, useWeatherByCity} from '../api';
import {WeatherCard} from '../components';
import {useNavigation} from '@react-navigation/native';
import {useHourlyWeather} from '../api/use-hourly-forecast';

export const HourlyWeather = () => {
  const insets = useSafeAreaInsets();
  const {goBack} = useNavigation();

  const {cityState} = useCityState();
  const {city} = cityState;

  const {data: currentWeather, isLoading: currentWeatherLoading} =
    useWeatherByCity(city);

  const {data, isLoading} = useHourlyWeather(city);

  // console.warn(data);

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

      <View style={styles.container}>
        {isLoading && data === undefined ? (
          <ActivityIndicator color="#9BA4B5" />
        ) : (
          <FlatList
            data={data}
            renderItem={RenderItem}
            keyExtractor={item => item.dt.toString()}
          />
        )}
      </View>
    </View>
  );
};

const RenderItem = ({item}: {item: HourlyWeatherData}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#9BA4B5',
        marginVertical: 4,
        borderRadius: 6,
        justifyContent: 'space-evenly',
        paddingVertical: 4,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text>
          {new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
          }}
          style={{width: 50, height: 50}}
        />
        <Text>{item.main.temp} °C</Text>
      </View>
      <Text>{item.weather[0].description}</Text>
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
    marginVertical: 10,
    borderRadius: 5,
  },
  label: {
    color: 'white',
  },
});
