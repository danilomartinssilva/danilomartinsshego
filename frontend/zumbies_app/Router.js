import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import addUserScreen from './src/screens/addUserScreen';
import LoginScreen from './src/screens/LoginScreen';
import ListZumbiScreen from './src/screens/Zumbis/ListZumbiScreen';
import colors from './src/themes/colors';

import AddZumbisScreen from './src/screens/Zumbis/AddZumbisScreen';
import AddPowerScreen from './src/screens/Power/AddPowerScreen';
import AddReinforcementScreen from './src/screens/Reinforcement/AddReinforcementScreen';



const Stack = createStackNavigator();
const AboutScreen = () => (<Text>About</Text>)
export default function Router({ logged }) {

  return (

    <>
      <NavigationContainer  >
        <Stack.Navigator

          initialRouteName={logged ? "ListZumbiScreen" : "LoginScreen"} tabBarOptions={{
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
          <Stack.Screen name="ListZumbiScreen" component={ListZumbiScreen}
            options={{
              headerTitle: "Lista de Zumbis",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "white"
              },
              headerStyle: {

                backgroundColor: "#000"
              }


            }}

          />
          <Stack.Screen name="AddPowerScreen" component={AddPowerScreen} />
          <Stack.Screen name="AddZumbisScreen" component={AddZumbisScreen} />
          <Stack.Screen name="AddReinforcementScreen" component={AddReinforcementScreen} />







        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}