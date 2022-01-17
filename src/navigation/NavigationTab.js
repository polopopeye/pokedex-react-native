import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="AccountNavigation"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="PokedexNavigation"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeBall(),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="FavoriteNavigation"
        component={FavoriteNavigation}
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
