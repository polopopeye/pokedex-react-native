import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../screens/Favorites';

const Stack = createStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{ title: 'favorites <3' }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavoriteNavigation;
