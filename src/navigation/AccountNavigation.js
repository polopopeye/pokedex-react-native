import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Account from '../screens/Account';

const Stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: 'Account' }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigation;
