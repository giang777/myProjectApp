import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import React from 'react'
import Login from '../login/Login';
import Register from '../login/Register';

const Stack = createStackNavigator();
const Main = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})