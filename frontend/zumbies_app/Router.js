import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import addUserScreen from './src/screens/addUserScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createStackNavigator();
const AboutScreen = () => (<Text>About</Text>)
export default function Router() {
  return (

    <NavigationContainer >
      <Stack.Navigator

        initialRouteName="LoginScreen" tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="AddUserScreen"
          options={{
            headerTitle: "Cadastro",
            headerStyle: {
              backgroundColor: '#4D4D4D',

            },
            headerTitleStyle: {

              color: "#FFF",
            },
            headerTitleAlign: "center"
          }}
          component={addUserScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}