import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';


const iconUsuario = require('../assets/iconos/iconUsuario.png')
const icoEdad = require('../assets/iconos/edad.png')
const icoEmail = require('../assets/iconos/iconEmail.png');
const icoContrasena = require('../assets/iconos/iconContrasena.png');

const Login2 = () => {
    const [id, setId] = useState(0);
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
        const response = await axios.post("http://192.168.237.115/php/login.php", {
            id: id,
            email: email,
            contrasena: contrasena
        });
        console.log(response.data); // Verificar la respuesta del servidor en la consola
        if (response.data.result === "success") {
            const userData = response.data; // Aquí están todos los datos del usuario
            console.log(userData);
            setId(userData.identificacion) //Aqui modifico el setId le asigno lo que obtengo de la api
            //Guardando datos de sesion en el asynStorage 
            await AsyncStorage.setItem("token", "70");
            await AsyncStorage.setItem("identificacion", userData.identificacion);
            await AsyncStorage.setItem("nombre", userData.nombre);
            await AsyncStorage.setItem("edad", userData.edad);
            await AsyncStorage.setItem("email", userData.email);
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
        <Image
        source= {require('../assets/imgHome/AmamantaLogo.png')}
        style={styles.imgLogo}
        />
        <Text style={styles.txtRegistarse}>Ingresa con tu cuenta o crea una nueva</Text>
        <View style={styles.containInputs}>
                <Image
                style={styles.iconos}
                source={icoEmail}
                />
            <TextInput placeholder="orlan@gmail.com / Email"
                style={styles.inputs}
                keyboardType="email-address"
                onChangeText={(txtEscrito) => {setEmail(txtEscrito)}}
            />
        </View>
        <View style={styles.containInputs}>
                <Image
                style={styles.iconos}
                source={icoContrasena}
                />
            <TextInput placeholder="Contraseña" 
            style={styles.inputs}
            secureTextEntry={true}
            onChangeText={(txtEscrito) => {setContrasena(txtEscrito)}}
            />
        </View>
        <View >
            <TouchableOpacity style={styles.btnIngreso}
            onPress={() =>{
            autenticacion()
            setEnviar(true)
            }}
            ><Text style={styles.txtInferior}>Ingresar</Text>
            </TouchableOpacity>
            
        </View>
       

        <TouchableOpacity 
            onPress={() =>{xx.navigate("Registro")}}>
                <Text style={[styles.btnEnlaces,{textDecorationLine: 'underline'}]}>Crear una cuenta</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0F7',
        padding: 20,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogo:{
         width:280,
        height:200,
        objectFit:'fill',
        marginVertical:70 
    },
    txtRegistarse:{
        fontSize:30,
        textAlign: 'center',
        color: '#6A71B9',
        fontWeight: 'bold',
        marginBottom:25,
        marginHorizontal:25
    },
    containInputs:{
        marginTop:10,
        marginBottom:7,
        marginHorizontal:50,
        backgroundColor: '#FAD2E0',
        padding:10,
        flexDirection:'row',
        borderRadius:10
    },
    inputs:{
        marginLeft:10,
        width:210,
    },
    iconos:{
        width:20,
        height:20,
        
    },
    btnIngreso:{
        marginTop:20,
        backgroundColor:'#6A71B9',
        textAlign:'center',
        borderRadius:10,
    },
    txtInferior:{
        padding:10,
        textAlign:'center',
        fontSize:18,
        color:'#fff',
        fontWeight:'600',
        padding:10
    },
    btnEnlaces:{
        marginTop:40,
        color:'#FF7BAC',
        fontWeight:'600'
        /*textDecorationColor: '#FF7BAC' */
    },
})

export default Login2
 
