import React, { useState, useEffect } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CronometroPrueba = () => {
  const [activo, setActivo] = useState(false);
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  const iniciarCronometro = () => {
    setActivo(true); //Se ejecuta la funcion y cambia el stateActivo a true;
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

  const xx  = useNavigation();



   
/* 
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
  }; */

   
  /* const handleStop2 = () => {
    setIsRunning2(false);
  }; */
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
          onPress={() => { xx.navigate("Home") }}>
          <AntDesign name="left" size={24} color="black" />
      </Pressable>
      <Text style={{ fontSize: 24 }}>Cronómetro </Text>
      <Text style={{ fontSize: 40 }}>
        {horas < 10 ? `0${horas}` : horas}:
        {minutos < 10 ? `0${minutos}` : minutos}:
        {segundos < 10 ? `0${segundos}` : segundos}
      </Text>
      {!activo ? (
        <Button title="Iniciar" onPress={iniciarCronometro} />
      ) : (
        <Button title="Detener" onPress={detenerCronometro} />
      )}
      <Button title="Reiniciar" onPress={reiniciarCronometro} />
    </View>
  );
};

export default CronometroPrueba;
