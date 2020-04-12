import React from 'react';
import {NavigationContainer}from '@react-navigation/native';
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import {Image,StyleSheet,TouchableOpacity,View } from 'react-native';

import Headerscreen from './scr/screens/Headerscreen';
import Detailscreen from './scr/screens/Detailscreen';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="   "
          component={Headerscreen}
          options={{
            headerStyle: {
              height: 0,
            },
          }} />

        <Stack.Screen name="Detailscreen" component={Detailscreen}
          options={{
            title: " ",
            headerStyle: {
              height: 0,
              backgroundColor: '#fafafa',
            },
            headerLeft: null
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

