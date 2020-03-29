import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';

const Stack = createStackNavigator();
const AboutScreen = () => (<Text>About</Text>)
export default function Router() {
  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName="HomeScreen" tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}