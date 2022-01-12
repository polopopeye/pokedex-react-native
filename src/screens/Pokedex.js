import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

const Pokedex = (props) => {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView>
      <Text>Pokedex SCREEN</Text>
      <Button
        title="IR A SETTINGS"
        onPress={() => {
          goToSettings();
        }}
      ></Button>
    </SafeAreaView>
  );
};

export default Pokedex;
