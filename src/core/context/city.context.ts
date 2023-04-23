import {CityAction, CityState} from './types';
import { createContext, useContext } from "react";

export const defaultCityState: CityState = {city: ''};

export const cityReducer = (state: CityState, action: CityAction) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      return {...state, city: action.payload};
    default:
      return state;
  }
};

const myCity = {
  cityState: defaultCityState,
  setCityState: (action: CityAction) => {},
};

export const CityContext = createContext(myCity);

export const useCityState = () => useContext(CityContext);
