import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [email, setEmail] = useState(0)
    const [contrasena, setContrasena] = useState('')

    const [enviar, setEnviar] = useState(false) 

    useEffect(() => {
        const autenticacion = async()=>{
            axios.post("http://10.1.80.70/php/users.php", //Link de datos obtenidos de una api le enviaremos por 
                JSON.stringify({ //Medio del metodo post los datos escritos en los inputs
                    nombre: nombre,
                    edad : edad,
                    email : email,
                    contrasena : contrasena
                })
            ).then((response)=>{
                console.log(response)
                setEnviar(false)
            }).catch((error)=>{
                console.log(error)
            })
        }
        if(enviar) autenticacion();
    }, [enviar]) 



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
          setEnviar(true) //Cuando se presione el boton cambiara a true   
        }}
        >
            <Text style={{color: 'white'}}>Registrarse</Text>
        </TouchableOpacity>
      </View>
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
