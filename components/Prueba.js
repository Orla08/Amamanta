import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';

class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      remainingSeconds: 0,
      isRunning: false,
    };
  }

  // Función para iniciar el temporizador
  startTimer = () => {
    const { inputHours, inputMinutes, inputSeconds } = this.state;
    const hours = parseInt(inputHours, 10);
    const minutes = parseInt(inputMinutes, 10);
    const seconds = parseInt(inputSeconds, 10);

    if (hours >= 0 && minutes >= 0 && seconds >= 0) {
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      if (totalSeconds > 0) {
        this.setState({ isRunning: true, remainingSeconds: totalSeconds });
        this.timer = setInterval(this.tick, 1000); // Actualiza cada segundo
      } else {
        Alert.alert('Seleccione un tiempo válido antes de empezar.');
      }
    } else {
      Alert.alert('Ingrese valores numéricos válidos para las horas, minutos y segundos.');
    }
  };

  // Función para detener el temporizador
  stopTimer = () => {
    this.setState({ isRunning: false });
    clearInterval(this.timer);
  };

  // Función para reiniciar el temporizador
  resetTimer = () => {
    this.setState({
      inputHours: '',
      inputMinutes: '',
      inputSeconds: '',
      remainingSeconds: 0,
      isRunning: false,
    });
    clearInterval(this.timer);
  };

  // Función para formatear segundos a "hh:mm:ss"
  formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Función para actualizar el contador de segundos
  tick = () => {
    this.setState((prevState) => ({
      remainingSeconds: prevState.remainingSeconds - 1,
    }));

    if (this.state.remainingSeconds === 0) { //Si el contador llega a 0 manda la notificacion y el alert
      this.stopTimer();
      this.sendNotification(); // Enviar notificación cuando el temporizador se agote
      Alert.alert('Se acabo el tiempo');
    }
  };

  // Función para enviar una notificación
  sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Temporizador terminado',
        body: '¡El temporizador ha finalizado!',
      },
      trigger: null, // Notificación inmediata
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer); // Limpia el temporizador cuando el componente se desmonta
  }

  render() {
    const { inputHours, inputMinutes, inputSeconds, remainingSeconds, isRunning } = this.state;
    const formattedTime = this.formatTime(remainingSeconds);

    return (
      <View style={styles.container}>
        <View style={styles.containerIntroduccion}>
          <Pressable style={styles.iconoAtras} onPress={() => { navigate("Home") }}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
          <Text style={styles.txtBienvenida}>Cronómetro</Text>
        </View>
        <Text>Temporizador: {formattedTime}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input}
            placeholder=" Horas "
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ inputHours: text })}
            value={inputHours}
          />
          <Text style={{ marginTop: 1 }}> : </Text>
          <TextInput
            style={styles.input}
            placeholder=" Minutos "
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ inputMinutes: text })}
            value={inputMinutes}
          />
          <Text style={{ marginTop: 1 }}> : </Text>
          <TextInput
            style={styles.input}
            placeholder=" Segundos "
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ inputSeconds: text })}
            value={inputSeconds}
          />
        </View>

        {!isRunning ? (
          <Button title="Iniciar" onPress={this.startTimer} />
        ) : (
          <>
            <Button title="Detener" onPress={this.stopTimer} />
            <Button title="Reiniciar" onPress={this.resetTimer} />
          </>
        )}
      </View>
    );
  }
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
    flexDirection: 'row',
  },
  iconoAtras: {
    marginTop: 65,
  },
  txtBienvenida: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginTop: 60,
    fontWeight: '600',
    marginHorizontal: 80,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 5,
  },
});

export default Prueba;
