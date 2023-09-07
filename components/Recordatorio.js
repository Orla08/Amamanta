import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Recordatorio = () => {
  const [activo, setActivo] = useState(false);
  const [tiempo, setTiempo] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  const numbers = Array.from({ length: 60 }, (_, index) => ({
    label: index.toString(),
    value: index,
  }));
  const numbers2 = Array.from({ length: 24 }, (_, index) => ({
    label: index.toString(),
    value: index,
  }));

  const iniciarTemporizador = () => {
    setActivo(true); //Se ejecuta la funcion y cambia el stateActivo a true;
  };

  useEffect(() => {
    let intervalo;

    if (activo) {
      intervalo = setInterval(() => {
        if (segundos > 0) { //Si la cantidad de segundos que colocas que escoge el usuario es mayor a cero
          setSegundos((prevSegundos) => prevSegundos - 1); //Descuente un segundo por intevalos de mil milisegundos
        } else { //Sino 
          if (minutos > 0) { //Si 
            setMinutos((prevMinutos) => prevMinutos - 1);
            setSegundos(59);
          } else {
            if (horas > 0) {
              setHoras((prevHoras) => prevHoras - 1);
              setMinutos(59);
              setSegundos(59);
            } else {
              setActivo(false);
            }
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalo);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [activo, segundos, minutos, horas]);


    useEffect(() => {
      if(activo){
        if(segundos===0 && minutos===0 & horas===0){
          Alert.alert("Se agoto el tiempo")
        }
      }
    })




  return (
    <View style={styles.container}>
      <Text>Recordatorio</Text>
      <Text>Valor seleccionado: {horas} : {minutos} : {segundos}</Text>
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