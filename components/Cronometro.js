import { View, Text, StyleSheet, Pressable, Image, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';



const img = require('../assets/tonykroos.jpg')
const iconStart = require('../assets/iconos/boton-de-play.png')
const iconPausa = require('../assets/iconos/pausa.png')
const iconStop = require('../assets/iconos/boton-detener.png')
const imgSeno = require('../assets/iconos/seno.png')

const Cronometro = () => {
   const [isRunning, setIsRunning] = useState(false);
  const [resetWatch, setResetWatch] = useState(false);
  const [tiempo, setTiempo] = useState(0)
  const [minutos, setMinutos] = useState(0);
  const[horas, setHoras] = useState(0);

  const [id2, setId2] = useState(0);
  const [seno, setSeno] = useState('');
  const [comentario, setComentario] = useState('');
  /* const [isRunning2, setIsRunning2] = useState(false);
  const [resetWatch2, setResetWatch2] = useState(false); */


  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTiempo(prevTiempo => prevTiempo + 1); //Aqui se incrementa en uno cada vez que pase un segundo
      }, 1000);
    } else {
      clearInterval(interval);
    }  return () => clearInterval(interval);
  }, [isRunning]);


  /* useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTiempo(prevTiempo => {
            if(prevTiempo + 1 == 60){
                setMinutos = minutos + 1;
                return 0;
            }
        })
       }, 1000);
    } else {
      clearInterval(interval);
    }  return () => clearInterval(interval);
  }, [isRunning]); */

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
    

/*   setMinutos(()=>{
    if(tiempo==60){
        minutos = minutos+1
        setTiempo(0)
    }
  })
  setHoras(()=>{
    if(minutos==60){
        horas = horas+1
        setMinutos(0)
    }
  }) */


  const handleStart = () => {
    setIsRunning(!isRunning);
    setResetWatch(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setResetWatch(true);
    setTiempo(0)
    setMinutos(0)
  };

   
  


 /*  const handleStart2 = () => {
    setIsRunning2(true);
    setResetWatch2(false);
  };

  const handleStop2 = () => {
    setIsRunning2(false);
  };

  const handleReset2 = () => {
    setIsRunning2(false);
    setResetWatch2(true);
  }; */

  const ingresoDatos = async () => {
    try {
        const response = await axios.post("http://10.1.82.216/php/login.php", {
            id: id2,
            seno :seno,
            tiempo: tiempo,
        });
        console.log(response.data); // Verificar la respuesta del servidor en la consola
        if (response.data.result === "success") {
            const userData = response.data; // Aquí están todos los datos del usuario
            console.log(userData);
            setId2(userData.identificacion)
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
                <Pressable
                onPress={() => setSeno('izquierdo')}
                >
                    <Image
                        style={styles.imagen}
                        source={imgSeno}
                    />
                    <Text style={{textAlign: "center", fontSize:23}}>Izquierdo</Text>
                </Pressable>
                <Pressable
                onPress={() => setSeno('derecho')}
                >
                    <Image
                        style={styles.imagen2}
                        source={imgSeno}
                    />
                    <Text style={{textAlign: "center", fontSize:23}}>Derecho</Text>
                </Pressable>
            </View>
            
        </View>
            <View style={styles.containerCuerpo}>
            <Text style={styles.Text}>Lactancia en curso:</Text>
            <View style={styles.containerCronometos}>
                <View style={styles.contCards}>
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
                    <Text style={styles.text2}>Seno {seno}</Text>
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
                        <Text> {horas} hrs {minutos} min {tiempo} sg</Text> 
                        <Pressable onPress={handleReset}>
                        <Image
                                source={iconStop}
                                style={styles.iconos}
                            />
                        </Pressable> 
                    </View>
                </View>
                {/* <View style={styles.contCards}>
                    <Stopwatch
                    laps
                    msecs
                    start={isRunning2}
                    reset={resetWatch2}
                    options={{
                        container: styles.stopwatchContainer,
                        text: styles.stopwatchText,
                    }}
                    />
                    <Text style={styles.text2}>Seno Derecho</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={handleStart2} disabled={isRunning2}>
                            <Image
                                source={iconStart}
                                style={styles.iconos}
                            />
                        </Pressable>
                        <Pressable title="Parar-D" onPress={handleStop2} disabled={!isRunning2} >
                        <Image
                                source={iconPausa}
                                style={styles.iconos}
                            />
                        </Pressable>
                        <Pressable title="Reiniciar-D" onPress={handleReset2}>
                        <Image
                                source={iconStop}
                                style={styles.iconos}
                            />
                        </Pressable>
                    </View>
                </View> */}
            </View>
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
        fontFamily: 'Roboto'
    },
    containerImg:{
        flexDirection: 'row',
        marginHorizontal:20,
        justifyContent:'space-around'
    },
    imagen: {
        width: 130,
        height: 150,
        borderRadius: 20,
        marginHorizontal: 90,
        marginVertical: 30,
        objectFit: 'fill',
    },imagen2: {
        width: 130,
        height: 150,
        borderRadius: 20,
        marginHorizontal: 90,
        marginVertical: 30,
        transform:[{scaleX:-1}],
        objectFit: 'fill',
    },
    Text:{
        marginTop:10,
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginLeft:30,
        fontFamily: 'Roboto'
    },
    text2:{
        fontSize:20,
         color:'#fff',
          textAlign:'center', marginBottom:5,
          fontFamily: 'Roboto'
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
        padding: 10,
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
        flexDirection:'row',
        justifyContent: 'space-around'
    },
    iconos:{
        width:30,
        height:30,
        //color:'#41219f'  este debe ser el color del icono
    }
})

export default Cronometro