import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
//SafeAreaView solo es en iphone

const imgIntrouccion = require('../assets/home/madre_hijo.jpg')

const iconIntroduccion = require("../assets/home/introduccion.png")
const iconTiposDePezon = require("../assets/home/tiposdepezon.png")
const iconBeneficios = require("../assets/home/beneficios.png")
const iconChangeMilk = require("../assets/home/cambios.png")
const iconCronometro = require("../assets/home/cronometro.png")
const iconLactancia = require("../assets/home/lactanciaMaterna.png")
const iconRecordatorio = require("../assets/home/recordatorio.png")
const iconEnTuCuerpo = require("../assets/home/EntuCuerpo.png")
const iconRecurso = require("../assets/home/Recurso25.png")
const iconPosiciones = require("../assets/home/posiciones.png")




export default function Home() {
    const xx = useNavigation();
    return (
        <View style={styles.container}>
            <View style={[styles.containerIntroduccion]}>
                <Text style={styles.txtBienvenida}>Bienvenida mamá</Text>
            </View>
            {/* Imagen y cards */}
            <View>
                <ImageBackground
                    source={imgIntrouccion} style={[styles.imagenprueba,]}>
                    <View style={styles.posicion}>
                        <Text style={styles.txtImagen}>Consejos para dormir el bebé</Text>
                    </View>
                </ImageBackground>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.contenedorCards}>
                        <View>
                            <Pressable
                                onPress={() => { xx.navigate("Introduccion") }}
                            >
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconIntroduccion}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Introduccion</Text>
                            </Pressable>
                        </View>
                        <View style={styles.espacioImg}>
                            <Pressable
                                onPress={() => { xx.navigate("LactanciaMaterna") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconLactancia}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Lactancia materna</Text>
                            </Pressable>
                        </View>
                        <View style={styles.espacioImg}>
                            <Pressable
                                onPress={() => { xx.navigate("LQPETC") }}
                            >
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconEnTuCuerpo}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Lo que pasa en</Text>
                                <Text style={styles.txt2}>tu cuerpo</Text>
                            </Pressable>
                        </View>
                        <View style={styles.espacioImg}>
                            <Pressable
                                onPress={() => { xx.navigate("BeneficiosLactancia") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconBeneficios}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Beneficios de</Text>
                                <Text style={styles.txt2}>la lactancia</Text>
                            </Pressable>
                        </View>
                        <View style={styles.espacioImg}>
                            <Pressable
                                onPress={() => { xx.navigate("CambiosDeLeche") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconChangeMilk}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Cambios de leche</Text>
                                <Text style={styles.txt2}>tu cuerpo</Text>
                            </Pressable>
                        </View>
                        <View style={styles.espacioImg}>
                            <Pressable
                                onPress={() => { xx.navigate("PosicionesAmamantar") }}>
                                <View></View>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconPosiciones}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Posiciones para</Text>
                                <Text style={styles.txt2}>amamantar</Text>
                            </Pressable>
                        </View>
                        <View style={styles.espacioImg}>
                            <Pressable
                                onPress={() => { xx.navigate("TiposDePezon") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconTiposDePezon}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Tipo de</Text>
                                <Text style={styles.txt2}>pezon</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>


                {/* Herramientas */}
                <View style={styles.contenedorHerramientas}>
                    <View>
                        <Text style={styles.txtHerramienta}>Herramientas</Text>
                    </View>
                    <View style={styles.contenedorCards2}>
                        <View >
                            <Pressable>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconCronometro}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Cronometro</Text>
                                <Text style={styles.txt2}>de lactancia</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconRecordatorio}
                                        style={styles.imgCards}
                                    />
                                </View>
                                <Text style={styles.txt2}>Recordatorio</Text>
                                <Text style={styles.txt2}>de lactancia</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
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
        height: 130,
        marginBottom: 10,
        justifyContent: 'center',
    },
    txtBienvenida: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '600'
    },
    posicion: {
        flex: 1,
        justifyContent: 'flex-end',
        width: 300,
    },
    txtImagen: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#000',
        opacity: 0.5,
        padding: 6
    },
    imagenprueba: {
        width: 300,
        height: 200,
        marginHorizontal: 50,
        marginVertical: 30,
        objectFit: 'fill',
    },

    contenedorCards: {
        flexDirection: 'row',
        marginHorizontal: 45
    },
    espacioImg: {
        marginLeft: 13
    },
    containerImg: {
        backgroundColor: '#ffc0cb',
        width: 100,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
    },
    imgCards: {
        width: 75,
        height: 70,
        objectFit: 'fill',
    },
    imgMedio: {
        // marginLeft: 8
    },
    txt2: {
        fontSize: 13,
        textAlign: 'center',
    },
    txtHerramienta: {
        color: '#FFF',
        backgroundColor: '#ffb6c1',
        fontSize: 20,
        fontWeight: '600',
        marginRight: 200,
        marginLeft: 50,
        textAlign: 'center',
        borderRadius: 20,
        marginVertical: 40,
        padding: 4
    },
    contenedorCards2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 130
    }


})
