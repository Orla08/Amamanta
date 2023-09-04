import { View, Text, Image, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
//import NotificactionService from '../NotificationConfig.js'

const Recordatorio = () => {
  const xx = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Recordatorio</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.btnNuevo}
            onPress={null}
            >
              <Text style={{fontWeight:'700'}}>Nueva</Text>
            </TouchableOpacity>
            </ScrollView>
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
    flexDirection: 'row',
    display: 'flex',
  },
  iconoAtras: {
    marginTop: 20,
    alignItems: 'flex-start',
    marginTop:70
  },
  txtIntroduccion: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:60,
    marginRight:70,
    marginLeft:60
  },
  imagen: {
    backgroundColor: '#000',
    width: 300,
    height: 300,
    borderRadius: 20,
    marginHorizontal: 50,
    marginVertical: 30,
  },
  txt_s: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'justify',
    marginHorizontal: 30
  },
  conceptos: {
    fontSize: 20,
    textAlign: 'justify',
    color: '#000',
    fontWeight: '600',
  },
  txtSubtitulos: {
    fontSize: 25,
    marginBottom: 15,
    color: '#000',
    textAlign: 'justify',
    fontWeight: '600',
    marginHorizontal: 30
  },
  btnNuevo:{
    marginLeft:10,
  }
  
})

export default Recordatorio