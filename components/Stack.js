import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'
import Introduccion from './Introduccion'
import Home from './HomeScreen'


const Stac = createNativeStackNavigator()

const Stack = () => {
    return (
        <Stac.Navigator>
            <Stac.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stac.Screen name="Introduccion" component={Introduccion} options={{ headerShown: false }} />
        </Stac.Navigator>
    )
}

export default Stack