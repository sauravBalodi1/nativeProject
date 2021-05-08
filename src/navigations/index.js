import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';
``
const  AppNavContainer = () => {
    const isLoggedIn=true;
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
