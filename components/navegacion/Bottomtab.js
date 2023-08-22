import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../HomeScreen";
import Videos from "../Videos.js";
import { Image } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Introduccion from "../Introduccion.js";
import Documentacion from "../Documentacion.js";
import LactanciaMaterna from "../LactanciaMaterna.js";
import LQPETC from "../LQPETC.js";
import BeneficiosLactancia from "../BeneficiosLactancia.js";
import PosicionesAmamantar from "../PosicionesAmamantar.js";
import CambiosDeLeche from "../CambiosDeLeche.js";
import TiposDePezon from "../TiposDePezon.js";
import Cronometro from "../Cronometro.js";


 const iconVideos = require('/Users/imac007/Documents/GitHub/Amamanta/assets/iconos/video.png')
const iconHome = require('/Users/imac007/Documents/GitHub/Amamanta/assets/iconos/casa.png')
const iconDocumentos= require('/Users/imac007/Documents/GitHub/Amamanta/assets/iconos/documento.png') 



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
        <Tab.Navigator
            initialRouteName="Inicio" //Aqui le digo al tab navigateor que por defecto debe empezar en el Screen que tiene como nombre Inicio
            screenOptions={{ //Opciones de vitsas del tab navigator
                tabBarActiveTintColor: '#191970' //Cuando se presione por defecto tendra este color
            }}
        
        >
            <Tab.Screen name="Videos" component={Videos}
                options={{ headerShown: false, 
                tabBarShowLabel: false, 
                tabBarIcon: ({focused}) => (<Image source={iconVideos} style={[{tintColor: focused? '#191970':'#000'},{width:26, height:26}]}/>) }} />
            <Tab.Screen name="Inicio" component={SatckGroup}
                options={{ headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (<Image source={iconHome} style={[{tintColor: focused? '#191970':'#000'},{width:26, height:30}]}/>) }}/>
            <Tab.Screen name="Documentacion" component={Documentacion}
                options={{ headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (<Image source={iconDocumentos} style={[{tintColor: focused? '#191970':'#000'},{width:26, height:27}]}/>) }}/>
        </Tab.Navigator>
    )
}

// //Stack
const Stack = createNativeStackNavigator();

function SatckGroup() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Introduccion" component={Introduccion} options={{ headerShown: false }} />
            <Stack.Screen name="LactanciaMaterna" component={LactanciaMaterna} options={{ headerShown: false }} />
            <Stack.Screen name="LQPETC" component={LQPETC} options={{ headerShown: false }} />
            <Stack.Screen name="BeneficiosLactancia" component={BeneficiosLactancia} options={{ headerShown: false }} />
            <Stack.Screen name="CambiosDeLeche" component={CambiosDeLeche} options={{ headerShown: false }} />
            <Stack.Screen name="PosicionesAmamantar" component={PosicionesAmamantar} options={{ headerShown: false }} />
            <Stack.Screen name="TiposDePezon" component={TiposDePezon} options={{ headerShown: false }} />
            <Stack.Screen name="Cronometro" component={Cronometro} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


