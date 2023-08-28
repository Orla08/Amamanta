import { View, Text, StyleSheet, Pressable,  } from 'react-native'
import React, {useState} from 'react'

const cronometroPrueba = () => {

    const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0);
  const[horas, setHoras] = useState(0);
  const [customInterval, setCustomInterval] = useState()
  const[tiempo, setTiempo]= useState('')

  const iniciarCronometro = ()=>{
    setCustomInterval(
        setInterval(()=>{
            cambiarTiempo();
        },1000)
    );
  };

  const pararTiempo = ()=>{
    if(customInterval){
        clearInterval(customInterval);
    }
  }

  const limpiarTiempo = ()=>{
    pararTiempo();
    setSegundos(0);
    setMinutos(0);
    setHoras(0);
  }
  
  const cambiarTiempo = ()=>{
    setSegundos((prevState)=>{
        if(prevState + 1 == 60){
            setMinutos(minutos + 1);
            if (minutos == 60){
                setHoras(horas + 1);
            }
            return 0;
        }
        return prevState + 1;
    })
  }

  setTiempo(horas+":"+minutos+":"+segundos)

  return (
    <View>
      <Text style={{fontSize:30}}>
        {horas < 10 ? "0"+horas : horas} : 
        {minutos < 10 ? "0"+minutos : minutos} :
        {segundos < 10 ? "0"+segundos : segundos} : 
        </Text>

        <Pressable
        onPress={iniciarCronometro}
        >
            <Text>Iniciar</Text>
        </Pressable>
        <Pressable
        onPress={pararTiempo}
        >
            <Text>Pausa</Text>
        </Pressable>
        <Pressable
        onPress={limpiarTiempo}
        >
            <Text>Detener</Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default cronometroPrueba