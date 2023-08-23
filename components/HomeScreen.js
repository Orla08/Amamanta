import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';


//SafeAreaView solo es en iphone

const imgIntrouccion = require('../assets/home/madre_hijo.jpg')

const iconIntroduccion = require("../assets/imgHome/introduccion.png")
const iconTiposDePezon = require("../assets/imgHome/tiposdepezon.png")
const iconBeneficios = require("../assets/imgHome/beneficios.png")
const iconChangeMilk = require("../assets/imgHome/cambios.png")
const iconCronometro = require("../assets/imgHome/cronometro.png")
const iconLactancia = require("../assets/imgHome/lactanciaMaterna.png")
const iconRecordatorio = require("../assets/imgHome/recordatorio.png")
const iconEnTuCuerpo = require("../assets/imgHome/EntuCuerpo.png")
const iconRecurso = require("../assets/home/Recurso25.png")
const iconPosiciones = require("../assets/imgHome/posiciones.png")




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
                    <Text style={{ color: '#fff' }}>{'<'}</Text>
                    <View style={styles.posicion}>
                        <Text style={styles.txtImagen}>Consejos para dormir el bebé</Text>
                    </View>
                </ImageBackground>

                  
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.contenedorCards}>
                    {/*Introduccion  */}
                        <View>
                                <TouchableOpacity
                                onPress={() => { xx.navigate("Introduccion") }}>
                                    <View style={[styles.containerImg]}>
                                        <Image
                                            source={iconIntroduccion}
                                            style={styles.imgCards} />
                                    </View>
                                    <Text style={styles.txt2}>Introduccion</Text>
                                </TouchableOpacity>
                        </View>
                    {/*Lactancia Materna */}
                        <View style={styles.espacioImg}>
                                <TouchableOpacity
                                onPress={() => { xx.navigate("LactanciaMaterna") }}>
                                <View style={[styles.containerImg]}>
                                    <Image
                                        source={iconLactancia}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Lactancia {'\n'}materna</Text>
                                </TouchableOpacity>
                        </View>
                    {/*Lo que pasa en tu cuerpo */}
                        <View style={styles.espacioImg}>
                            <TouchableOpacity
                                onPress={() => { xx.navigate("LQPETC") }}
                            >
                                <View style={[styles.containerImg]}>
                                    <Image
                                        source={iconEnTuCuerpo}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Lo que pasa {'\n'}en tu cuerpo</Text>
                            </TouchableOpacity>
                        </View>
                    {/*Lo que pasa en tu cuerpo */}
                        <View style={styles.espacioImg}>
                            <TouchableOpacity
                                onPress={() => { xx.navigate("BeneficiosLactancia") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconBeneficios}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Beneficios de {'\n'}de lactancia</Text>
                            </TouchableOpacity>
                        </View>
                    {/*Lo que pasa en tu cuerpo */}
                        <View style={styles.espacioImg}>
                            <TouchableOpacity
                                onPress={() => { xx.navigate("CambiosDeLeche") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconChangeMilk}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Cambios de leche{'\n'}en tu cuerpo</Text>
                            </TouchableOpacity>
                        </View>
                    {/*Lo que pasa en tu cuerpo */}
                        <View style={styles.espacioImg}>
                            <TouchableOpacity
                                onPress={() => { xx.navigate("PosicionesAmamantar") }}>
                                <View></View>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconPosiciones}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Posiciones para {'\n'}amamantar</Text>                                
                            </TouchableOpacity>
                        </View>
                    {/*Lo que pasa en tu cuerpo */}
                        <View style={styles.espacioImg}>
                            <TouchableOpacity
                                onPress={() => { xx.navigate("TiposDePezon") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconTiposDePezon}
                                        style={styles.imgCards} />
                                </View>
                                <Text style={styles.txt2}>Tipo de {'\n'}pezon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.contenedorFila}>
                    <AntDesign name="arrowleft" size={20} color='#fff'/>
                </View> 
                <View style={styles.contenedorFila2}>
                    <AntDesign name="arrowright" size={20} color='#fff'/>
                </View>
                


                {/* Herramientas */}
                <View style={styles.contenedorHerramientas}>
                    <View style = {styles.ContainTxtHerr}>
                        <Text style={styles.txtHerramienta}>Herramientas</Text>
                    </View>
                    <View style={styles.contenedorCards2}>
                        <View >
                            <TouchableOpacity
                            onPress={() => { xx.navigate("Cronometro") }}>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconCronometro}
                                        style={styles.imgCards2} />
                                </View>
                                <Text style={styles.txt2}>Cronometro {'\n'} de lactancia</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={[styles.containerImg,]}>
                                    <Image
                                        source={iconRecordatorio}
                                        style={styles.imgCards2}
                                    />
                                </View>
                                <Text style={styles.txt2}>Recordatorio {'\n'}de lactancia</Text>
                            </TouchableOpacity>
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
    contenedorFila:{
        position: 'absolute',
        left: 22,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    contenedorFila2:{
        position: 'absolute',
        right: 22,
        top: '50%',
        transform: [{ translateY: -12 }],
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
        padding: 6,
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
        marginHorizontal: 48
    },
    espacioImg: {
        marginLeft: 14,
        //width: 100,
        //height: 105,
    },
    containerImg: {
        //width: 100,
        //height: 90,
        //justifyContent: 'center',
        //alignItems: 'center',
        //borderRadius: 19,
    },
    imgCards: {
        width: 100,
        height: 90,
        objectFit: 'fill',
    },
    imgCards2: {
        width: 95,
        height: 88,
        objectFit: 'fill',
    },
    imgMedio: {
        // marginLeft: 8
    },
    txt2: {
        marginTop:3,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Roboto',
        lineHeight:12
    },
    ContainTxtHerr:{
        backgroundColor: '#ffadc6',
        marginRight: 200,
        marginLeft: 50,
        borderRadius: 20,
        marginTop:28,
        marginBottom: 40,
    },
    txtHerramienta: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        
        padding: 4,
        fontFamily: 'Roboto'
    },
    contenedorCards2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 130
    }


})
