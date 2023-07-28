import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput, SafeAreaView } from "react-native";

export function Read(){
    // setState value untuk search bar
    const [value, onChangeText] = React.useState('');
    const inputStyle = {
        backgroundColor: value ? 'lightgrey' : 'lightgrey',
        paddingLeft: 20,
        borderRadius: 40,
        color: 'black',
      };

    return(
            <>
                <ScrollView style={{backgroundColor: 'white'}}>
                    
                <View style={style.searchBar}>
                    <TextInput
                        style={[inputStyle, {color: 'black'}]}
                        placeholder=' Search...'
                        editable
                        multiline
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>

                {/* Content Heding Text*/}
                <View style={{margin: 10, marginLeft: 25}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: '#262626'}}> Most Update News </Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/Tol-Cisumdawu.jpeg")} />
                            <Text style={style.textHeading}>TARIF TOL CISUMDAWU (CILEUNYI SUMEDANG) 2023, TAK GRATIS LAGI! </Text>
                            <Text style={style.timeCard}> 28 Februari 2023 </Text>
                            <Text style={style.categoriCard}> Manufaktur </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/neermana-studio-SYKYxuT2o5w-unsplash.jpg")} />
                            <Text style={style.textHeading}>BANDUNG SEPI SAAT PANDEMI COVID-19 </Text>
                            <Text style={style.timeCard}> 17 Maret  2022 </Text>
                            <Text style={style.categoriCard}> Wisata </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/gracia-dharma-qTlbO6mkQH0-unsplash.jpg")} />
                            <Text style={style.textHeading}>TIPS MENEMUKAN HOBBI UNTUK KESENANGAN </Text>
                            <Text style={style.timeCard}> 2 Mei 2022 </Text>
                            <Text style={style.categoriCard}> Passion </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/tianshu-liu-aqZ3UAjs_M4-unsplash.jpg")} />
                            <Text style={style.textHeading}>HARGA TIKET PERGI BERLIBUR KE OSAKA JEPANG </Text>
                            <Text style={style.timeCard}> 17 Agustus 2022 </Text>
                            <Text style={style.categoriCard}> Wisata </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/ezgif.com-webp-to-jpg.jpg")} />
                            <Text style={style.textHeading}>BEGINI WUJUD MANUSIA di TAHUN 3000, BIKIN MERINDING </Text>
                            <Text style={style.timeCard}> 23 Juli 2023 </Text>
                            <Text style={style.categoriCard}> Technology </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/kekeringan-horor-di-spanyol-selatan-ribuan-orang-tanpa-air-minum-1_169.jpeg")} />
                            <Text style={style.textHeading}>BMKG INGATKAN ANCAMAN GAGAL PANEN IMBAS EL NINO </Text>
                            <Text style={style.timeCard}> 22 Juli 2023 </Text>
                            <Text style={style.categoriCard}> Cuaca </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/telkomsel-munculin-lagi-veronika-kini-pakai-chatgpt_169.jpeg")} />
                            <Text style={style.textHeading}>TELKOMSEL VERONIKA BANGKIT KEMBALI, DIKLAIM LEBIH HUMANIS EFEK CHATGPT</Text>
                            <Text style={style.timeCard}> 21 Juli 2023 </Text>
                            <Text style={style.categoriCard}> Technology </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={style.elemenCard}>
                            <Image style={style.imageCard} source={require("../../assets/img/nasa-bangun-komplek-peluncuran-pesawat-luar-angkasa-di-california-5_169.jpeg")} />
                            <Text style={style.textHeading}>'BANDAR ANTARIKSA' TERAKHIR BAGI PESAWAT ULANG-ALIK ENDEAVOUR </Text>
                            <Text style={style.timeCard}> 21 Juli 2023 </Text>
                            <Text style={style.categoriCard}> Technology </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


                {/* Content Heding Text*/}
                <View style={{margin: 10, marginLeft: 25}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: '#262626'}}> Most Read News </Text>
                </View>


                {/* List */}
                <SafeAreaView style={style.container}>
                    <TouchableOpacity style={style.elemenList}>
                        <View style={style.imageContainer}>
                            <Image
                                style={style.imageList}
                                source={require("../../assets/img/ilustrasi-judi-online_169.jpeg")}
                            />
                            </View>
                            <View style={style.textContainer}>
                            <Text style={style.textHeadingList}>Kominfo Bongkar Negara yang Jadi Pusat Judi Online</Text>
                            <Text style={style.timeList}>20 Juli 2023</Text>
                            <Text style={style.categoriList}>Technology</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>


                <SafeAreaView style={style.container}>
                    <TouchableOpacity style={style.elemenList}>
                        <View style={style.imageContainer}>
                            <Image
                                style={style.imageList}
                                source={require("../../assets/img/6143549f-d279-478b-9378-cff2b6e6ea78_169.jpeg")}
                            />
                            </View>
                            <View style={style.textContainer}>
                            <Text style={style.textHeadingList}>BMKG Bongkar Penyebab Suhu Dingin Malam saat Kemarau di Bandung </Text>
                            <Text style={style.timeList}>20 Juli 2023</Text>
                            <Text style={style.categoriList}>Cuaca</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>


                <SafeAreaView style={style.container}>
                    <TouchableOpacity style={style.elemenList}>
                        <View style={style.imageContainer}>
                            <Image
                                style={style.imageList}
                                source={require("../../assets/img/ilustrasi-hacker-ilustrasi-serangan-siber-1_169.jpeg")}
                            />
                            </View>
                            <View style={style.textContainer}>
                            <Text style={style.textHeadingList}>Deret Insiden Kebocoran Data WNI 2023, BPJS Hingga Dukcapil </Text>
                            <Text style={style.timeList}>19 Juli 2023</Text>
                            <Text style={style.categoriList}>Technology</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>


                <SafeAreaView style={style.container}>
                    <TouchableOpacity style={style.elemenList}>
                        <View style={style.imageContainer}>
                            <Image
                                style={style.imageList}
                                source={require("../../assets/img/ilustrasi-whatsapp-3_169.jpeg")}
                            />
                            </View>
                            <View style={style.textContainer}>
                            <Text style={style.textHeadingList}>Whatsapp Down, Sempat Tak Bisa Kirim Pesan </Text>
                            <Text style={style.timeList}>20 Juli 2023</Text>
                            <Text style={style.categoriList}>Social Media</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>


                <SafeAreaView style={style.container}>
                    <TouchableOpacity style={style.elemenList}>
                        <View style={style.imageContainer}>
                            <Image
                                style={style.imageList}
                                source={require("../../assets/img/glenn-carstens-peters-0woyPEJQ7jc-unsplash.jpg")}
                            />
                            </View>
                            <View style={style.textContainer}>
                            <Text style={style.textHeadingList}>Perkembangan Permainan Paltform Game Terbaru Di Era Zaman Modern </Text>
                            <Text style={style.timeList}>20 Juli 2023</Text>
                            <Text style={style.categoriList}>Game</Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
                

            </ScrollView>
        </>
    )
}

// setting property for styling
var {width} = Dimensions.get('window');

// styling pada komponene halaman home
const style = StyleSheet.create({
    HeaderImage: {
        height: 280,
        width: width * 1,
    },
    searchBar: {
        margin: 10,
        padding: 2,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: 'lightgrey',
        // textShadowColor: 'black',
        // backgroundColor: '#adadad',
        backgroundColor: 'lightgrey',
        color: 'black',
    },
    imageContent: {
        borderWidth: 1,
        borderColor: "thistle",
        width: width * 0.75,
        // marginTop: 20,
        marginLeft: 50,
        height: 140,
        borderRadius: 20,
    },
    footer: {
        width: width * 1,
        height: 100,
        backgroundColor: 'black',
        display: 'flex',
    },
    elemenCard: {
        marginTop: 10,
        backgroundColor: 'black',
        marginBottom: 20,
        borderColor:  'black',
        marginLeft: 30,
        width: 350,
        height: 260,
        borderRadius: 25,
    },
    imageCard: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        width: 350, 
        height: 150,
    },
    textHeading: {
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginBottom: 15,
    },
    timeCard: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: -20,
        marginLeft: 20,
    },
    categoriCard:{
        fontSize: 10,
        color: 'white',
        textAlign: 'right',
        marginTop: 7,
        marginRight: 40,
    },
    

    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
      },
      elemenList: {
        flexDirection: 'row',
        // padding: 10,
        backgroundColor: '#ffffff',
      },
      imageContainer: {
        flex: 1,
      },
      imageList: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 15,
      },
      textContainer: {
        flex: 2,
        paddingLeft: 10,
      },
      textHeadingList: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },
      timeList: {
        color: 'gray',
        marginBottom: 5,
      },
      categoriList: {
        color: 'green',
      },
})
