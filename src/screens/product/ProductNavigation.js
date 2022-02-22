import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();
import HomeStack from './screens/HomeStack';
import Cart from './screens/Cart';
import ProfileStack from './screens/ProfileStack';
import SearchStack from './screens/SearchStack';

const ProductNavigation = (props) => {
    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({
            tabBarIcon: () =>{
                if(route.name =="HomeStack"){
                    return <Image source={require('../../assets/images/home.png')}/>
                }else  if(route.name =="Cart"){
                    return <Image source={require('../../assets/images/cart.png')}/>
                }else  if(route.name =="ProfileStack"){
                    return <Image source={require('../../assets/images/user.png')}/>
                }else  if(route.name =="SearchStack"){
                    return <Image source={require('../../assets/images/search.png')}/>
                }
            },
            tabBarLabel: ({focused}) =>{
                if(route.name =="HomeStack" && focused){
                    return <Image source={require('../../assets/images/dot.png')}/>
                }else  if(route.name =="Cart" && focused){
                    return <Image source={require('../../assets/images/dot.png')}/>
                }else  if(route.name =="ProfileStack" && focused){
                    return <Image source={require('../../assets/images/dot.png')}/>
                }else  if(route.name =="SearchStack" && focused){
                    return <Image source={require('../../assets/images/dot.png')}/>
                }
                return null;
            },
            headerShown:false,
        })}
        >
            <Tab.Screen name="HomeStack" component={HomeStack}/>
            <Tab.Screen name="SearchStack" component={SearchStack}/>
            <Tab.Screen name="Cart" component={Cart}/>
            <Tab.Screen name="ProfileStack" component={ProfileStack}/>
        </Tab.Navigator>
    )
}

export default ProductNavigation
