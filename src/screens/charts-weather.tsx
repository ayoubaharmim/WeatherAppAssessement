import React, {useState} from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCityState} from '../core';
import {useHourlyWeather} from '../api/use-hourly-forecast';
import {LineChart} from 'react-native-chart-kit';

type TChart = {
  labels: string[];
  datasets: {data: any[]; color: () => string; strokeWidth: number}[];
};

export const ChartsWeather = () => {
  const insets = useSafeAreaInsets();

  const {cityState} = useCityState();
  const {city} = cityState;

  const [chartData, setChartData] = useState<TChart>();

  const {isLoading} = useHourlyWeather(city, data => {
    let chartElements = {
      labels: data.map(el =>
        new Date(el.dt * 1000).toLocaleTimeString([], {hour: 'numeric'}),
      ),
      datasets: [
        {
          data: data.map(el => el.main.humidity),
          color: () => '#297AB1', // color for the humidity line
          strokeWidth: 2,
        },
        {
          data: data.map(el => el.main.temp),
          color: () => '#FF9933', // color for the temperature line
          strokeWidth: 2,
        },
        {
          data: data.map(el => el.rain?.['1h'] ?? 0),
          color: () => '#CC3300', // color for the rainfall line
          strokeWidth: 2,
        },
      ],
    };
    setChartData(chartElements);
  });

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.container,
      }}>
      {isLoading || chartData === undefined ? (
        <ActivityIndicator />
      ) : (
        <LineChart
          data={chartData!}
          width={Dimensions.get('window').width} // from react-native
          height={500}
          verticalLabelRotation={90}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 1, // number of decimal places to show on Y-axis labels
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForLabels: {fontSize: 8},
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
