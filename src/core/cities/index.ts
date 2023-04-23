import {storage} from '../index';

export const getCities = (): Array<string> => {
  const value = storage.getString('cities');
  return value ? JSON.parse(value) || [] : [];
};

export const setCity = (city: string) => {
  const cities = getCities();
  const set = new Set(cities);
  set.add(city);
  storage.set('cities', JSON.stringify([...set]));
};

export const deleteCity = (city: string) => {
  const cities = getCities();
  const filteredCities = cities.filter(el => {
    return el !== city;
  });
  storage.set('cities', JSON.stringify(filteredCities));
};
