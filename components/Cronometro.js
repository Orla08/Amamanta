import { View, Text, StyleSheet, Pressable, ScrollView, Image, Alert, TouchableOpacity} from 'react-native'
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
 /*   const [isRunning, setIsRunning] = useState(false);
  const [resetWatch, setResetWatch] = useState(false); */
  const [activo, setActivo] = useState(false);
  const [activo2, setActivo2] = useState(false);
  const [tiempo, setTiempo] = useState(0)
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0);
  const[horas, setHoras] = useState(0);
  const [identificacion, setId] = useState('');
  const [seno, setSeno] = useState('');
  const [alert2, setAlert2] = useState(false);
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


  const iniciarCronometro = () => {
    setActivo(!activo); //Se ejecuta la funcion y cambia el stateActivo a true;
    if(activo == false){
        setActivo2(true);
    }
  };

  useEffect(() => {
    let intervalo; 

    if (activo) { //Si activo es true es decir si se presiono el boton que ejecuta la funcion iniciarCronometro
      intervalo = setInterval(() => { //dentro de la variable intervalo se guardara una funcion  que es setInterval(función, intervalo);
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000); //La funcion se ejecutara cada segundo
    } else {
      clearInterval(intervalo); //Este clearInterval() es para detener la funcion de setInterval
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [activo]); // Si contiene elementos, el efecto se ejecutará cada vez que alguno de los elementos en el array de dependencias cambie entre renderizados.
  // como segundos cambia entre renderizados e ahi cuando empezara a ejecutarse el useEffect

  

  const detenerCronometro = () => { //Este es para detener el cronometro
    setActivo(false); //En este momento se desactiva la funcion iniciar y el useEffect que ejecuta lso intervalos tambien se detendra
  };

  const reiniciarCronometro = () => { //Este es para reiniciar el cronometro practicamente dejamos todo como cuando no tenia nada en 0 los valores y falso los booleanos
    setActivo(false);
    setActivo2(false);
    setAlert2(false);
    setSeno(''); 
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
  };

  // Actualizar los minutos y horas cuando los segundos lleguen a 60
  useEffect(() => {
    if (segundos === 60) {
      setSegundos(0);
      setMinutos((prevMinutos) => prevMinutos + 1);
    }
    if (minutos === 60) {
      setMinutos(0);
      setHoras((prevHoras) => prevHoras + 1);
    }
  }, [segundos, minutos]); // Si contiene elementos, el efecto se ejecutará cada vez que alguno de los elementos en el array de dependencias cambie entre renderizados
  // como minutos y horas cambia entre renderizados e ahi cuando empezara a ejecutarse el useEffect
  
/*   cambioDeCeros= () =>{
        if(segundos<10){
            setSegundos("0"+segundos);
        }else{setSegundos(segundos)}
        if(minutos<10){
            setMinutos("0"+minutos);
        }else{setMinutos(minutos)}
        if(horas<10){
            setHoras("0"+horas)
        }else{setHoras(horas)}
  }
  useEffect(()=>{
    cambioDeCeros()
  },[]) */

  const ceroALaLeft = (value) => {
    return value < 10 ? `0${value}` : value.toString();
  };
  
  // Dentro de tu useEffect existente que actualiza tiempo
  useEffect(() => {
    const tiempoCombinado = `${ceroALaLeft(horas)}:${ceroALaLeft(minutos)}:${ceroALaLeft(segundos)}`; //Dentro de tiempo combinado va la union de horas:minutos:segundos
    setTiempo(tiempoCombinado);
  }, [horas, minutos, segundos]);
  

  //Actualizar la variable tiempo que es la que se enviara en el post
  /* useEffect(() => {
    setTiempo(horas+":"+minutos+":"+segundos);
  },[horas,minutos,segundos]); // */

  const ingresoDatos = async () => {
    
    try {
        const response = await axios.post("http://10.1.80.62/php/data.php", {
            seno: seno,
/*             tiempo: tiempoAmamantando, */
            tiempo:tiempo,
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
const showAlert = () => 
        Alert.alert(
            'Envio De Datos',
            `Esta seguro que los datos proporcionados como: " Seno: ${seno} ", " tiempo: ${tiempo} " son los correctos?`,
            [
              {
                text: 'Cancelar',
                onPress: () => {
                    //setActivo(!activo);
                    Alert.alert('Cancelado')},
                style: 'cancel',
              },
              {
                text: 'OK', onPress: () => {
                        if(seno != ""){
                        ingresoDatos()
                        xx.navigate("Home")
                        console.log('Envio Exitoso')
                        }else{
                            Alert.alert('Cancelado','Debe escoger un seno');
                            xx.navigate("Cronometro")
                        }
                    }
                }
            ]
          );

const showAlert2 = () => 
        Alert.alert(
            'Envio De Datos',
            `Cambiaste de seno y ahora se enviarán los siguientes datos: "Seno: ${seno} ", "tiempo: ${tiempo} " son los correctos?`,
            [
              {
                text: 'Cancelar',
                onPress: () => {
                    setActivo(true); //Como se cancelo el cambio de seno sigue corriendo el cronometro actual
                    Alert.alert('Cancelado')},
                style: 'cancel',
              },
              {
                text: 'OK', onPress: () => {
                        if(seno != ""){//Si el seno no es vacio
                        ingresoDatos() //Haz el envio de datos 
                        reiniciarCronometro(); //Reinicia el cronometro
                        setActivo(true); //Ponlo a correor otra vez
                        if(seno == 'izquierdo'){ //Si el seno es izquierdo previamente
                            setSeno('derecho') //Setealo a derecho 
                        }else{setSeno('izquierdo')} //Y si no o sea si es derecho setealo a izquierdo
                        //xx.navigate("Cronometro") //Mandalo nuevamente a la vista de Cronometro para que siga allí
                        console.log('Envio Exitoso')
                        setAlert2(true); //Aqui se coloca true el state de alert para que se pueda modificar el comentario superior de la pantalla si cambia de seno 
                        }else{
                            Alert.alert('Cancelado','Debe escoger un seno');
                            xx.navigate("Cronometro")
                        }
                    }
                }
            ]
          );
 


  const xx = useNavigation();
  return (



    <View style={styles.container}>
        <View style={styles.containerIntroduccion}>
            <Pressable style={styles.iconoAtras}
                onPress={() => { xx.navigate("Home") }}>
                <AntDesign name="left" size={24} color="white" />
            </Pressable>
            <Text style={styles.txtBienvenida}>Cronometro</Text>
        </View>
        <View >
            <Text style={{textAlign: "center", fontSize:25, marginVertical:10}}> {!alert2 ? `Presione el seno con el${'\n'}cual amamantará al niño` : "Cambió de seno"} </Text>
            <View style={styles.containerImg}>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        if(seno == "derecho"){
                            showAlert2();
                            if(alert){
                                iniciarCronometro()
                            }
                        }else{
                            setSeno('izquierdo')
                            iniciarCronometro()
                        }
                        /* if(seno != ""){
                            setSeno('')
                            detenerCronometro()
                        }else{
                            setSeno('izquierdo')
                            iniciarCronometro()
                        } */
                            }
                         }
                    style={[{paddingLeft:57}]}
                    >
                        <Image
                            style={styles.imagen}
                            source={imgSenoIzquier}
                        />
                        <Text style={{textAlign: "center", fontSize:20}}>IZQUIERDO</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                    onPress={() => {
                        if(seno == "izquierdo"){
                            showAlert2();
                            if(alert){
                                iniciarCronometro()
                            }
                        }else{
                            setSeno('derecho')
                            iniciarCronometro()
                        }
                       /*  if(seno != ""){
                            setSeno('')
                            detenerCronometro()
                        }else{
                            setSeno('derecho')
                            iniciarCronometro()
                        } */
                            }
                         }
                    style={[{paddingRight:57}]}
                    >
                        <Image
                            style={styles.imagen2}
                            source={imgSenoDerecho}
                        />
                        <Text style={{textAlign: "center", fontSize:20}}>DERECHO</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
            
        </View>
            <View style={styles.containerCuerpo}>
            
            <Text style={styles.Text}>{activo ?"Cronometro En Curso": "Conometro En Pausa "}</Text>
            <Text style={styles.Text}>{activo ? "Lactando en seno "+seno : ""}</Text>
            
            
            <View style={styles.containerCronometos}>
                <View style={styles.contCards}>
                    {/* <Stopwatch
                    laps
                    msecs
                    start={isRunning}
                    reset={resetWatch}
                    options={{
                        container: styles.stopwatchContainer,
                        text: styles.stopwatchText,
                    }}
                    /> 
                    <Text style={{ fontSize: 40 }}>
                        {horas < 10 ? `0${horas}` : horas}:
                        {minutos < 10 ? `0${minutos}` : minutos}:
                        {segundos < 10 ? `0${segundos}` : segundos}
                    </Text>*/}
                    <Text style={[{ fontSize: 40 }, {textAlign:'center'},{color:'#fff'}]}>
                        {tiempo}
                    </Text>
                    
                    
                    
                </View>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable
            style={styles.contenedorSubmit}
             onPress={reiniciarCronometro}>
            <Text style={styles.btnInferiores}>
                    Reiniciar
                </Text>
            </Pressable> 
            <Pressable 
            style={styles.contenedorSubmit}
            onPress={() =>{
                    /* ingresoDatos(); */
                    showAlert()
                }}>
                <Text style={styles.btnInferiores}>
                    Enviar Datos
                </Text>
            </Pressable>
        </View>
        
    </View>
    
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
        marginHorizontal:70
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    iconos:{
        width:30,
        height:30,
        //color:'#41219f'  este debe ser el color del icono
    },
    contenedorSubmit:{
        marginTop:20,
        backgroundColor:'#e6e6fa',
        marginHorizontal:120,
        borderRadius: 20
    },
    btnInferiores:{
        textAlign:'center',
        fontSize:20,
        color:'#fff',
        fontWeight:'800',
        padding:10
    }
})

export default Cronometro