import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/home';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';

const Stack = createNativeStackNavigator();

export default function routes() {
 return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{
                headerTitle:'voltar',
                headerStyle:{
                    backgroundColor:'#00FFFF'
                }
            }}
            />
        </Stack.Navigator>
  </NavigationContainer>
  );
}