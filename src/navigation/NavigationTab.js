import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Account from '../screens/Account';
import Favorites from '../screens/Favorites';
import Pokedex from '../screens/Pokedex';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
// import { HeartIcon } from '@heroicons/react/solid';

const renderPokeBall = () => {
  return (
    <Image
      source={require('../assets/pokedex.png')}
      style={{ height: 75, width: 75, top: -15 }}
    />
  );
};

const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeBall(),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default NavigationTab;
