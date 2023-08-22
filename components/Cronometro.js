import { View, Text, StyleSheet, Pressable, Image, Button} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { useNavigation } from '@react-navigation/native';

const img = require('../assets/tonykroos.jpg')
const iconStart = require('../assets/iconos/boton-de-play.png')
const iconPausa = require('../assets/iconos/pausa.png')
const iconStop = require('../assets/iconos/boton-detener.png')

const Cronometro = () => {
   const [isRunning, setIsRunning] = useState(false);
  const [resetWatch, setResetWatch] = useState(false);
  const [isRunning2, setIsRunning2] = useState(false);
  const [resetWatch2, setResetWatch2] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
    setResetWatch(false);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setResetWatch(true);
  };
  const handleStart2 = () => {
    setIsRunning2(true);
    setResetWatch2(false);
  };

  const handleStop2 = () => {
    setIsRunning2(false);
  };

  const handleReset2 = () => {
    setIsRunning2(false);
    setResetWatch2(true);
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
        <View>
            <Image
                style={styles.imagen}
                source={img}
            />
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
                    <Text style={styles.text2}>Seno Izquierdo</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable onPress={handleStart} disabled={isRunning}>
                        <Image
                                source={iconStart}
                                style={styles.iconos}
                            />
                        </Pressable> 
                        <Pressable onPress={handleStop} disabled={!isRunning}>
                        <Image
                                source={iconPausa}
                                style={styles.iconos}
                            />
                        </Pressable> 
                        <Pressable onPress={handleReset}>
                        <Image
                                source={iconStop}
                                style={styles.iconos}
                            />
                        </Pressable> 
                    </View>
                </View>
                <View style={styles.contCards}>
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
                </View>
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
        backgroundColor: '#ffb6c1',
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
    },imagen: {
        width: 250,
        height: 250,
        borderRadius: 20,
        marginHorizontal: 90,
        marginVertical: 30,
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
        backgroundColor: '#e6e6fa'
    },
    contCards:{
        marginVertical:15,
        backgroundColor: '#b8b4d4ec',
        borderRadius:10,
        padding:5,
    },
    stopwatchContainer:{
        marginTop:10,
        padding: 10,
    }, 
    stopwatchText:{
        color: '#fff',
        fontSize: 20
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
        height:30
    }
})

export default Cronometro