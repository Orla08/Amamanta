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
import Recordatorio from "../Recordatorio.js";
import Login from "../Login.js";
import Registro from "../Registro.js";
import CronometroPrueba from "../CronometroPrueba.js";

const iconVideos = require('/Users/imac007/Documents/GitHub/Amamanta/assets/iconos/videos.png')
const iconHome = require('/Users/imac007/Documents/GitHub/Amamanta/assets/iconos/home.png')
const iconDocumentos= require('../../assets/iconos/documentos.png') 



export const Navegacion = () => {

    return (
        <NavigationContainer
        >
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
            style={{ alignItems: 'center'}}
        >
            <Tab.Screen name="Videos" component={Videos}
                options={{ headerShown: false, 
                tabBarShowLabel: false, 
                tabBarIcon: ({focused}) => (<Image source={iconVideos} style={[{tintColor: focused? '#fbc0d1':'#41219f'},{width:34, height:24}]}/>) }} />
            
            <Tab.Screen name="Inicio" component={SatckGroup}
                options={{ headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (<Image source={iconHome} style={[{tintColor: focused? '#fbc0d1':'#41219f'},{width:33, height:30}]}/>) }}/>
            
            <Tab.Screen name="Documentacion" component={Documentacion}
                options={{ headerShown: false, 
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => (<Image source={iconDocumentos} style={[{tintColor: focused? '#fbc0d1':'#41219f'},{width:21, height:29}]}/>) }}/>
        </Tab.Navigator>
    )
}

// //Stack
const Stack = createNativeStackNavigator();

function SatckGroup() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} 
            options={{ headerShown: false ,
                tabBarStyle:{display:'none'}}} />
            <Stack.Screen name="Registro" component={Registro}
            options={{ headerShown: false ,
                tabBarStyle:{display:'none'}}} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Introduccion" component={Introduccion} options={{ headerShown: false }} />
            <Stack.Screen name="LactanciaMaterna" component={LactanciaMaterna} options={{ headerShown: false }} />
            <Stack.Screen name="LQPETC" component={LQPETC} options={{ headerShown: false }} />
            <Stack.Screen name="BeneficiosLactancia" component={BeneficiosLactancia} options={{ headerShown: false }} />
            <Stack.Screen name="CambiosDeLeche" component={CambiosDeLeche} options={{ headerShown: false }} />
            <Stack.Screen name="PosicionesAmamantar" component={PosicionesAmamantar} options={{ headerShown: false }} />
            <Stack.Screen name="TiposDePezon" component={TiposDePezon} options={{ headerShown: false }} />
            <Stack.Screen name="Cronometro" component={Cronometro} options={{ headerShown: false }} />
            <Stack.Screen name="Recordatorio" component={Recordatorio} options={{ headerShown: false }} />
            <Stack.Screen name="CronometroPrueba" component={CronometroPrueba} options={{ headerShown: false }} />
            
        </Stack.Navigator>
    )
}


