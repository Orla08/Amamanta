import { View, Text, StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [email, setEmail] = useState(0)
    const [contrasena, setContrasena] = useState('')

    const [enviar, setEnviar] = useState(false) 

    const autenticacion = async () => { //Declara una función asíncrona llamada 
        try {//Es un bloque try...catch, que maneja los errores que puedan ocurrir durante la ejecución de la función.
            //const response = await axios.post(...): Utiliza Axios para realizar una solicitud POST al servidor. Los datos proporcionados 
            //(nombre, edad, email y contraseña) se envían en formato JSON en el cuerpo de la solicitud.
            const response = await axios.post("http://10.1.80.12/php/jjj.php", {
                nombre: nombre,
                edad: edad,
                email: email,
                contrasena: contrasena
            }).then()
            console.log(response.data.users); // Muestra la respuesta del servidor
        } catch (error) { 
            console.error(error);//catch (error) { console.error(error) }: Si ocurre un error durante la solicitud, captura el error y lo muestra en la consola.
        } finally {
            setEnviar(false);// Independientemente de si la solicitud tuvo éxito o falló, este bloque se ejecutará y establecerá el estado enviar en false, lo que significa que no se realizará otra solicitud hasta que se active manualmente.
        }
    };



  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" 
      style={styles.inputs}
      onChangeText={(txtEscrito) => {setNombre(txtEscrito)}}
      />
      <TextInput placeholder="Edad" 
      style={styles.inputs}
      onChangeText={(txtEscrito) => {setEdad(txtEscrito)}}
      />
      <TextInput placeholder="Email"
       style={styles.inputs} 
       autoCapitalize="none"
       onChangeText={(txtEscrito) => {setEmail(txtEscrito)}}
       />
      <TextInput placeholder="Contraseña" 
      style={styles.inputs}
      autoCapitalize="none"
      secureTextEntry="true"
      onChangeText={(txtEscrito) => {setContrasena(txtEscrito)}}
      />
      <View >
        <TouchableOpacity style={styles.button}
        onPress={() =>{
          setEnviar(true)//Cuando se presione el boton cambiara a true
          autenticacion();// Al mismo tiempo se activara la funcion
        }}
        >
            <Text style={{color: 'white'}}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      {enviar && <ActivityIndicator />} 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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


export default Login
