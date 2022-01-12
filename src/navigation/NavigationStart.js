import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Stack = createStackNavigator();

const NavigationStart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default NavigationStart;
