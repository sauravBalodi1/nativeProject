import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View,Text } from 'react-native'
import { LOGIN, REGISTER } from '../constants/RouteNames'
import login from '../screens/Login'
import signup from '../screens/Register'



const AuthNavigator = () => {
    
    const HomeStack=createStackNavigator();
    return <HomeStack.Navigator>
    <HomeStack.Screen name={LOGIN} component={login}></HomeStack.Screen>
    <HomeStack.Screen name={REGISTER} component={signup}></HomeStack.Screen>

    </HomeStack.Navigator>
}

export default AuthNavigator
