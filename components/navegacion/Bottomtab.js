import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../HomeScreen";
import Introduccion from "../Introduccion.js";
import Documentacion from "../Documentacion.js";
import Videos from "../Videos.js";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export const Navegacion = () => {

    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>

    );
}

//Tab
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Videos" component={Videos}
                options={{ headerShown: false, tabBarIcon: () => <MaterialIcons name="video-collection" size={24} color="black" />, tabBarShowLabel: false }} />
            <Tab.Screen name="Inicio" component={SatckGroup}
                options={{ headerShown: false, tabBarIcon: () => <Ionicons name="home" size={24} color="black" />, tabBarShowLabel: false }} />
            <Tab.Screen name="Documentacion" component={Documentacion}
                options={{ headerShown: false, tabBarIcon: () => <Ionicons name="document" size={24} color="black" />, tabBarShowLabel: false }} />
        </Tab.Navigator>
    )
}

// //Stack
const Stack = createNativeStackNavigator();

function SatckGroup() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Introduccion" component={Introduccion} />
        </Stack.Navigator>
    )
}


