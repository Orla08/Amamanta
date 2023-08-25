import { View, Text, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Login from './Login.js';
import Home from './HomeScreen.js';



const Login2 = () => {

    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [enviar, setEnviar] = useState(false) 
    /*const autenticacion = async () => { //Declara una función asíncrona llamada 
        try {//Es un bloque try...catch, que maneja los errores que puedan ocurrir durante la ejecución de la función.
            //const response = await axios.post(...): Utiliza Axios para realizar una solicitud POST al servidor. Los datos proporcionados 
            //(nombre, edad, email y contraseña) se envían en formato JSON en el cuerpo de la solicitud.
            const response = await axios.post("http://10.1.80.12/php/login.php", {
                email: email,
                contrasena: contrasena
            });
            /* const {identificacion, nombre, edad, email, contrasena} = response.data;
            console.log("El usuario es" + identificacion);
            console.log("La contraseña es: "+ contrasena); 
            //xx.navigate("Home");
            console.log(response);
            console.log(response.data); // Muestra la respuesta del servidor
        } catch (error) { 
            console.error(error);//catch (error) { console.error(error) }: Si ocurre un error durante la solicitud, captura el error y lo muestra en la consola.
        } finally {
            setEnviar(false);// Independientemente de si la solicitud tuvo éxito o falló, este bloque se ejecutará y establecerá el estado enviar en false, lo que significa que no se realizará otra solicitud hasta que se active manualmente.
        }
    }*/ 

   const autenticacion = async () => {
    try {
        const response = await axios.post("http://10.1.80.12/php/login.php", {
            email: email,
            contrasena: contrasena
        });
        console.log(response.data); // Verificar la respuesta del servidor en la consola
        if (response.data.result === "success") {
            const userData = response.data; // Aquí están todos los datos del usuario
            console.log(userData);
            alert("Bienvenidos");
            await AsyncStorage.setItem("token", "70");
            xx.navigate('Home');
        } else {
            alert("Credenciales incorrectas");
        }
    } catch (error) {
        console.error(error);
    }
};
    



    
const xx = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email"
       style={styles.inputs}
       keyboardType="email-address"
       onChangeText={(txtEscrito) => {setEmail(txtEscrito)}}
       />
      <TextInput placeholder="Contraseña" 
      style={styles.inputs}
      secureTextEntry={true}
      onChangeText={(txtEscrito) => {setContrasena(txtEscrito)}}
      />
      <View >
        <TouchableOpacity style={styles.button}
        onPress={() =>{
          autenticacion()
          setEnviar(true)
        }}
        ><Text style={{color: 'white'}}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() =>{xx.navigate("Login")}}>
            <Text style={{color: 'white'}}>Registrarse</Text>
        </TouchableOpacity>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fad7e1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs:{
        borderBottomColor: '#d6d1d2',
        borderBottomWidth:1,
        padding:10
    },button:{
        marginTop:20,
        padding:8,
        backgroundColor:'#41219f',
        borderRadius:10
    }
})

export default Login2