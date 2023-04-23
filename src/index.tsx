import React, {useReducer} from 'react';
import {RootNavigator} from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {cityReducer, defaultCityState, CityContext} from './core';
import {QueryClient, QueryClientProvider} from 'react-query';

export const App = () => {
  const [cityState, setCityState] = useReducer(cityReducer, defaultCityState);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CityContext.Provider value={{cityState, setCityState}}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </CityContext.Provider>
    </QueryClientProvider>
  );
};
