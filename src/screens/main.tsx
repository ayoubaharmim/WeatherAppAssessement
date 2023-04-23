import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getCities, useCityState} from '../core';

export const Main = () => {
  const insets = useSafeAreaInsets();
  const {cityState} = useCityState();

  const [cities, setCities] = useState(getCities());
  const [newCity, setNewCity] = useState('');

  console.warn(cities);
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter a city..." />
        <Button title="Add" onPress={() => {}} disabled={newCity.length === 0} />
      </View>
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
