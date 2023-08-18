import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
const imgIntrouccion = require("../assets/tonykroos.jpg");
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import Home from './HomeScreen.js';



const LactanciaMaterna = () => {
    const xx = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerIntroduccion}>
                <Pressable style={styles.iconoAtras}
                    onPress={() => { xx.navigate("Home") }}>
                    <AntDesign name="left" size={24} color="white" />
                </Pressable>
                <Text style={styles.txtIntroduccion}>Lactancia Materna</Text>
            </View>
            <View>
                <Text style={styles.txt_s}>Mamá estas en una etapa, la
                    cual es uno de los mejores momentos de tu vida.
                </Text>
                <Text style={styles.txt_s}>
                    Esta cartilla busca guiarte, dando
                    respuesta a tus dudas e inquietudes
                    y brindándote consejos para este
                    proceso tan importante para ti,
                    como para tu bebé y toda la familia.
                </Text>
            </View>
            <View>
                <Image
                    style={styles.imagen}
                    source={imgIntrouccion}
                />
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
    },
    iconoAtras: {
        marginLeft: 10,
        marginTop: 20
    },
    txtIntroduccion: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        padding: 5,
        fontWeight: '600',
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
        marginHorizontal: 50,
        marginBottom: 10,
        textAlign: 'justify',
    }

})

export default LactanciaMaterna