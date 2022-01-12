import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

const Home = (props) => {
  console.log(props);

  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView>
      <Text>HOME SCREEN</Text>
      <Button
        title="IR A SETTINGS"
        onPress={() => {
          goToSettings();
        }}
      ></Button>
    </SafeAreaView>
  );
};

export default Home;
