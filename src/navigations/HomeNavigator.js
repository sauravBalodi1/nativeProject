import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import { View,Text } from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/RouteNames';
import Contacts from '../screens/Contacts';
import contactDetail from '../screens/ContactDetail';
import createContact from '../screens/CreateContact';
import settings from '../screens/Settings';




const HomeNavigator = () => {
    const HomeStack=createStackNavigator();
    
    return <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}>
            </HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={contactDetail}>
            </HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={createContact}>
            </HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={settings}>
            </HomeStack.Screen>
            

    </HomeStack.Navigator>
}

export default HomeNavigator
