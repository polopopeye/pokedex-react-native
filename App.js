import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';

// import { StatusBar } from 'expo-status-bar';
// import Login from './src/components/Login';
// import Saludar from './src/components/Saludar';

import NavigationStart from './src/navigation/NavigationStart';
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStart /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
