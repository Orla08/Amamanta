import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Recordatorio = () => {
  const [activo, setActivo] = useState(false);
  const [tiempoEnSegundos, setTiempoEnSegundos] = useState(0);
  const [tiempoRestante, setTiempoRestante] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [mostrarTiempo, setMostrarTiempo] = useState('');

  const numbers = Array.from({ length: 60 }, (_, index) => ({
    label: index.toString(),
    value: index,
  }));
  const numbers2 = Array.from({ length: 24 }, (_, index) => ({
    label: index.toString(),
    value: index,
  }));

  useEffect(() =>{
    console.log("",mostrarTiempo,",  ",tiempoEnSegundos )
  },[mostrarTiempo]);
  
  useEffect(() => { //De esta forma actualizamos el tiempo en segundos de inmediato
    const tiempo =
      (horas !== null ? horas : 0) * 3600 +
      (minutos !== null ? minutos : 0) * 60 +
      (segundos !== null ? segundos : 0);
    setTiempoEnSegundos(tiempo);
    setMostrarTiempo(
      `${horas !== null ? horas : '00'} : ${
        minutos !== null ? minutos : '00'
      } : ${segundos !== null ? segundos : '00'}`
    );
  }, [horas, minutos, segundos]);


  const iniciarTemporizador = () => {
    if (tiempoEnSegundos > 0) { //Si el tiempo en segundos es mayor a cero entoces
      setTiempoRestante(tiempoEnSegundos); //A tiempo restante le asignamos la actualizacion de tiempo en segundos
      setActivo(true);//Y cambiamos el active a true
      
    } else {
      Alert.alert("Seleccione un tiempo válido antes de empezar."); //Si el tiempo en segundos no es mayor a cero debe escoger un tiempo valido 
    }
  };


  useEffect(() => {

    let intervalo;
    if (activo) {
      intervalo = setInterval(() => {
        if (tiempoRestante > 0) {
          setTiempoRestante((prevTiempo) => prevTiempo - 1);
          // Lógica para restar los segundos, minutos y horas
          setSegundos((prevSegundos) => prevSegundos - 1);
          if (segundos <= 0) {
            setMinutos((prevMinutos) => prevMinutos - 1);
            setSegundos(59);
            if (minutos <= 0) {
              setHoras((prevHoras) => prevHoras - 1);
              setMinutos(59);
            }
          }
        } else {
          setActivo(false);
          clearInterval(intervalo);
          if (tiempoRestante === 0) {
            setMostrarTiempo(`00:00:00`)
            Alert.alert("Se agotó el tiempo");
          }
        }
      }, 1000);
      
      // Agregar esta condición para detener el intervalo cuando tiempoRestante es 0
      if (tiempoRestante === 0) {
        setActivo(false);
        clearInterval(intervalo);
      }

    } else {
      clearInterval(intervalo);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [activo, tiempoRestante]);





  return (
    <View style={styles.container}>
      <Text>Recordatorio</Text>
      <Text>Valor seleccionado: {mostrarTiempo}</Text>
      <View style={styles.input}>
      <RNPickerSelect
        onValueChange={(value) => setHoras(value)}
        items={numbers2}
        value={horas}
      /><Text style={{marginBottom:2, marginHorizontal:30}}>:</Text>
      <RNPickerSelect
        onValueChange={(value) => setMinutos(value)}
        items={numbers}
        value={minutos}
      /><Text style={{marginBottom:2, marginHorizontal:30}}>:</Text>
      <RNPickerSelect
        onValueChange={(value) => setSegundos(value)}
        items={numbers}
        value={segundos}
      />
      </View>
      <TouchableOpacity
      onPress={iniciarTemporizador}>
        <Text>
          Empezar
        </Text>
      </TouchableOpacity>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:200,
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    paddingVertical:40,
    fontSize: 24,
    marginHorizontal:100,
    flexDirection:'row'
  }

})

export default Recordatorio