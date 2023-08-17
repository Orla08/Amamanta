import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//SafeAreaView solo es en iphone

const imgIntrouccion = require("../assets/tonykroos.jpg");

function Introduccion() {
    return (
        <View style={styles.container}>
            <View style={styles.containerIntroduccion}>
                <Text style={styles.txtIntroduccion}>Introducción</Text>
            </View>
            <View>
                <Image
                    style={styles.imagen}
                    source={imgIntrouccion}
                />
            </View>
            <View >
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
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerIntroduccion: {
        backgroundColor: '#ffb6c1',
        marginHorizontal: 50,
        marginTop: 50,
        marginBottom: 10,
        borderRadius: 10,
    },
    txtIntroduccion: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
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

export default Introduccion