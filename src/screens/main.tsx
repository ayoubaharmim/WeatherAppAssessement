import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, FlatList } from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities, setCity, useCityState} from '../core';

export const Main = () => {
  const insets = useSafeAreaInsets();
  const {cityState} = useCityState();

  const [cities, setCities] = useState(getCities());
  const [newCity, setNewCity] = useState('');

  console.warn(cities);

  const addCity = useCallback(() => {
    setCity(newCity);
    setNewCity('');
    setCities(getCities());
  }, [newCity]);

  const renderCityItem = ({item}: {item: string}) => {
    return <Text>{item}</Text>;
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a city..."
          value={newCity}
          onChangeText={(val: string) => {
            setNewCity(val);
          }}
        />
        <Button title="Add" onPress={addCity} disabled={newCity.length === 0} />
      </View>

      <FlatList data={cities} renderItem={renderCityItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
});
