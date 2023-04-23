export interface CityState {
  city: string;
}

export interface CityAction {
  type: 'UPDATE_CITY';
  payload: string;
}
