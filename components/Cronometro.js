import { View, Text, StyleSheet, Pressable, ScrollView, Image, Button, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import * as Font from 'expo-font' 
import Login from './Login';



const img = require('../assets/tonykroos.jpg')
const iconStart = require('../assets/iconos/boton-de-play.png')
const iconPausa = require('../assets/iconos/pausa.png')
const iconStop = require('../assets/iconos/boton-detener.png')
const imgSenoIzquier = require('../assets/iconos/senIzquierdo.png')
const imgSenoDerecho = require('../assets/iconos/senDerecho.png')

const Cronometro = () => {
   const [isRunning, setIsRunning] = useState(false);
  const [resetWatch, setResetWatch] = useState(false);
  const [activo, setActivo] = useState(false);
  const [tiempo, setTiempo] = useState(0)
  const [minutos, setMinutos] = useState(0);
  const[horas, setHoras] = useState(0);
  const [tiempo2, setTiempo2] = useState('')
  const [identificacion, setId] = useState('');
  const [seno, setSeno] = useState('');
  const [comentario, setComentario] = useState('');
  /* const [isRunning2, setIsRunning2] = useState(false);
  const [resetWatch2, setResetWatch2] = useState(false); */

  const getDatosSesion = async () => { //En esta funcion asincrona obtenemos la identificacion
    try {
      const id = await AsyncStorage.getItem('identificacion');
      setId(id || ''); //Y se la seteamos a el state de ID para que cuando se ejecute la funcion de ingreso de datos ya tenga el id que se necesita enviar
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    getDatosSesion();  //Aqui se ejecuta la funcion de inmediato sin mirar las demas
  }, []);


    

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTiempo(prevTiempo => prevTiempo + 1); //Aqui se incrementa en uno cada vez que pase un segundo
        setTiempo2(minutos +":"+tiempo);
    }, 1000);
    } else {
      clearInterval(interval);
    }  return () => clearInterval(interval);
  }, [isRunning]);


  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setMinutos(prevTiempo => prevTiempo + 1); //Aqui se incrementa en uno cada vez que pase un segundo
        
    }, 60500);
    } else {
      clearInterval(interval);
    }  return () => clearInterval(interval);
  }, [isRunning]);


  const handleStart = () => {
    setIsRunning(!isRunning);
    setResetWatch(false);
    setActivo(!activo);
  };

  const handleReset = () => {
    setIsRunning(false);
    setResetWatch(true);
    setTiempo(0)
    setMinutos(0)
    setActivo(!activo)
  };

   
  /* const handleStop2 = () => {
    setIsRunning2(false);
  }; */
  

  const ingresoDatos = async () => {
    
    try {
        const response = await axios.post("http://10.1.80.100/php/data.php", {
            seno: seno,
/*             tiempo: tiempoAmamantando, */
            comentario: comentario,
            idUser: identificacion,
        });
        //console.log(response.data); // Verificar la respuesta del servidor en la consola
         if (response.data.result === "success") {
            const respuestaPhp = response.data; // Aquí están todos los datos del usuario
            console.log(respuestaPhp); 
        } else {
            console.log("Error del try");
        }
    } catch (error) {
        console.log(error);
        /* console.log(seno);
        console.log(id2);
        console.log(id);
        console.log(comentario);
        console.error(error); */
    }
};
 


  const xx = useNavigation();
  return (

    <ScrollView>

    <View style={styles.container}>
        <View style={styles.containerIntroduccion}>
            <Pressable style={styles.iconoAtras}
                onPress={() => { xx.navigate("Home") }}>
                <AntDesign name="left" size={24} color="white" />
            </Pressable>
            <Text style={styles.txtBienvenida}>Cronometro</Text>
        </View>
        <View >
            <Text style={{textAlign: "center", fontSize:25, marginVertical:10}}>Presione el seno con el{'\n'}cual amamantará al niñ@</Text>
            <View style={styles.containerImg}>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        setSeno('izquierdo')
                        handleStart()
                            }
                         }
                    style={[{paddingLeft:57}]}
                    >
                        <Image
                            style={styles.imagen}
                            source={imgSenoIzquier}
                        />
                        <Text style={{textAlign: "center", fontSize:23}}>Izquierdo</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        setSeno('derecho')
                        handleStart()
                            }
                         }
                    style={[{paddingRight:57}]}
                    >
                        <Image
                            style={styles.imagen2}
                            source={imgSenoDerecho}
                        />
                        <Text style={{textAlign: "center", fontSize:23}}>Derecho</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
            
        </View>
            <View style={styles.containerCuerpo}>
            <Text style={styles.Text}>Lactancia en curso:</Text>
            <View style={styles.containerCronometos}>
                <View style={styles.contCards}>
                <Text style={styles.text2}>{activo && isRunning? "Lactando en el seno " + seno : ""}</Text>
                    <Stopwatch
                    laps
                    msecs
                    start={isRunning}
                    reset={resetWatch}
                    options={{
                        container: styles.stopwatchContainer,
                        text: styles.stopwatchText,
                    }}
                    />
                    
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={handleStart}>
                        <Image
                                source={iconStart}
                                style={styles.iconos}
                            />
                        </Pressable> 
                        {/* <Pressable onPress={console.log(tiempo)}>
                        <Image
                                source={iconPausa}
                                style={styles.iconos}
                            /> 
                        </Pressable>*/}
                        
                        {/* <Text>{tiempo2}</Text>  */}
                        <Pressable onPress={handleReset}>
                        <Image
                                source={iconStop}
                                style={styles.iconos}
                            />
                        </Pressable> 
                    </View>
                </View>
            </View>
        </View>
        <Pressable 
        style={styles.contenedorSubmit}
        onPress={() =>{
                ingresoDatos();
            }}>
                <Text style={[{textAlign: 'center'},{padding:10}]}>
                    Terminar/Enviar
                </Text>
            </Pressable>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerIntroduccion: {
        backgroundColor: '#ffadc6',
        height: 130,
        marginBottom: 10,
        justifyContent: 'center',
        flexDirection: 'row'
    },iconoAtras: {
        marginTop:65
    },
    txtBienvenida: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 60,
        fontWeight: '600',
        marginHorizontal:80,
        //fontFamily: 'Roboto'
    },
    containerImg:{
        flexDirection: 'row',
        marginHorizontal:10,
        justifyContent:'space-around'
    },
    imagen: {
        width: 130,
        height: 150,
        marginVertical: 30,
        objectFit: 'fill',
    },
    imagen2: {
        width: 130,
        height: 150,
        //borderRadius: 20,
        marginVertical: 30,
        //transform:[{scaleX:-1}],
        objectFit: 'fill',
    },
    Text:{
        marginTop:10,
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginLeft:30,
        //fontFamily: 'Roboto'
    },
    text2:{
        fontSize:20,
         color:'#fff',
          textAlign:'center', marginBottom:5,
          //fontFamily: 'Roboto'
    },
    containerCuerpo:{
        backgroundColor: '#e6e6fa',
        marginTop:40
    },
    contCards:{
        marginVertical:15,
        backgroundColor: '#b8b4d4ec',
        borderRadius:10,
        padding:20,
    },
    stopwatchContainer:{
        marginTop:10,
        marginHorizontal:40
    }, 
    stopwatchText:{
        color: '#fff',
        fontSize: 30
    },
    containerCronometos:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    buttonContainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    iconos:{
        width:30,
        height:30,
        //color:'#41219f'  este debe ser el color del icono
    },
    contenedorSubmit:{
        marginVertical:25,
        backgroundColor:'#e6e6fa',
        marginHorizontal:120,
        borderRadius: 20
    }
})

export default Cronometro