import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from './Home';
import Detail from './Detail';
export default HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
               
           </Stack.Navigator>
    )
}