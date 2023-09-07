import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { TouchableOpacity,Button,SafeAreaView, StyleSheet, Text, View ,Image,TextInput, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen1 from './HomeScreen1';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();




export default function App() {
  
  
  

  return (
    <><NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen1}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer></>
  );
}

