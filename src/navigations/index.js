import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useContext } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';import { GlobalContext } from '../context/reducers/Provider';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
``
const  AppNavContainer = () => {
    
    const {authentication:{isLoggedIn}} = useContext(GlobalContext)
    //console.log("state",state.authentication.isLoggedIn)
console.log(isLoggedIn)
    return (
        <NavigationContainer>
    
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        {isLoggedIn?( <DrawerNavigator/>):( <AuthNavigator/>)}
        
        
      
  
    </NavigationContainer>
        
    )
}
// screens>>Home>>Drawer
//screens>>Auth>>>
export default  AppNavContainer
