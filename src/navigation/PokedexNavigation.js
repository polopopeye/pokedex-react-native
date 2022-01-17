import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Pokedex from '../screens/Pokedex';

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{ title: 'Pokedex' }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
