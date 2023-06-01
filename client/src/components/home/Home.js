import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from './MainPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon  from 'react-native-vector-icons/FontAwesome';
import Cart from './Cart';
import Product from './Product';
import User from './User';

const Tab = createBottomTabNavigator();

const Home = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="MainPage"
            screenOptions={{
                tabBarActiveTintColor: 'blue',
            }}
        >
            <Tab.Screen
                name="MainPage"
                component={MainPage}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown:false,
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarLabel: 'Sản phẩm',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="note" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Giỏ hàng',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    ),
                }}
            />
            
            
           
        </Tab.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})