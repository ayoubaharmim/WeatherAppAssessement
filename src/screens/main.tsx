import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {deleteCity, getCities, setCity, useCityState} from '../core';

export const Main = () => {
  const insets = useSafeAreaInsets();
  const {cityState} = useCityState();

  const [cities, setCities] = useState(getCities());
  const [newCity, setNewCity] = useState('');

  const addCity = useCallback(() => {
    setCity(newCity);
    setNewCity('');
    setCities(getCities());
  }, [newCity]);

  const deleteCityFromList = useCallback((city: string) => {
    deleteCity(city);
    setCities(getCities());
  }, []);

  const renderCityItem = ({item}: {item: string}) => {
    return (
      <CityListItem
        city={item}
        onDelete={() => {
          deleteCityFromList(item);
        }}
        navigate={() => {}}
      />
    );
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        ...styles.container,
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

      {cities.length === 0 ? (
        <NoData />
      ) : (
        <FlatList data={cities} renderItem={renderCityItem} />
      )}
    </View>
  );
};

const NoData = () => {
  return (
    <View style={styles.noDataContainer}>
      <Text style={styles.noDataText}>Enter A City</Text>
    </View>
  );
};

const CityListItem = React.memo(
  ({
    city,
    onDelete,
    navigate,
  }: {
    city: string;
    onDelete: () => void;
    navigate: () => void;
  }) => {
    return (
      <View style={styles.cityItem}>
        <Text style={styles.cityText}>{city}</Text>

        <TouchableOpacity onPress={navigate}>
          <Text style={{color: 'green', fontSize: 14}}>View Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Text style={{color: 'red', fontSize: 14, fontWeight: 'bold'}}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F6F9',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  },
  cityItem: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#9BA4B5',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  cityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noDataContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  noDataText: {fontSize: 30, color: '#212A3E'},
});
