import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStackNavigator from '../src/navigation/StackNavigator';
import BottomTabNavigator from "./src/navigation/TabNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;