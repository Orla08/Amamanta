import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Pressable } from 'react-native'
const imgIntrouccion = require('../assets/home/madre_hijo.jpg')
import { AntDesign } from '@expo/vector-icons';


const Videos = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.containerIntroduccion, styles.sombra]}>
                <Text style={styles.txtBienvenida}>Videos tutoriales</Text>
            </View>
            <ScrollView>
                <View>
                    <Text style={[styles.textos]}>
                        Formas para alimentar al bebé
                    </Text>
                </View>
                <ImageBackground
                    source={imgIntrouccion} style={styles.imagenprueba}>
                    <View style={styles.posicion}>
                        <AntDesign name="caretright" size={50} color="black" />
                    </View>
                </ImageBackground>
                <View>
                    <Text style={[styles.textos]}>
                        Tips para dormir al bebé
                    </Text>
                </View>
                <ImageBackground
                    source={imgIntrouccion} style={styles.imagenprueba}>
                    <View style={styles.posicion}>
                        <AntDesign name="caretright" size={50} color="black" />
                    </View>
                </ImageBackground>
                <View>
                    <Text style={[styles.textos]}>
                        ¿Por qué el bebé duerme tanto?
                    </Text>
                </View>
                <ImageBackground
                    source={imgIntrouccion} style={styles.imagenprueba}>
                    <View style={styles.posicion}>
                        <AntDesign name="caretright" size={50} color="black" />
                    </View>
                </ImageBackground>
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
        flexDirection: 'row'
    },
    txtBienvenida: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 60,
        fontWeight: '700',
        fontFamily: 'Roboto'
    },
    posicion: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        opacity: 0.5
    },
    imagenprueba: {
        width: 300,
        height: 200,
        marginHorizontal: 50,
        marginVertical: 30,
    },
    textos: {
        textAlign: 'center',
        fontSize: 22,
        marginHorizontal: 70
    }
}
)

export default Videos