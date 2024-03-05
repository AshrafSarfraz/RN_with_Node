import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash_Blank from '../Screen/Authentication/Splash_Screens/Splash_Blank';
import Splash_Screen from '../Screen/Authentication/Splash_Screens/Splash_Screen';
import LoginScreen from '../Screen/Authentication/Login';
import SignUpScreen from '../Screen/Authentication/Signup';
import Home from '../Screen/Home/Home';

const Stack = createNativeStackNavigator();

const Stack_Navigation = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash_Blank" component={Splash_Blank} />
        <Stack.Screen name="Splash" component={Splash_Screen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;
