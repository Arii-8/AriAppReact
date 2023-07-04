import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from "react-native";
// import { Searchbar } from 'react-native-paper';

// fungsi utama pada komponen halaman home
export function Home(){
    // setState value untuk search bar
    const [value, onChangeText] = React.useState('');

    return(
        <>
            <ScrollView style={{backgroundColor: 'white'}}>

            {/* Search Bar */}
            <View style={style.searchBar}>
                {/* <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} /> */}
                <TextInput  style={{backgroundColor: value, paddingLeft: 20, color: 'black'}} placeholder=' Search...' editable multiline onChangeText={text => onChangeText(text)} value={value} />
            </View>

            {/* Content Heding Text*/}
            <View style={{margin: 10, marginLeft: 25}}>
                <Text style={{fontWeight: 'bold', fontSize: 30, color: '#262626'}}> Popular Daily News </Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/deborath-ramos-l-W-A9i4Mwx-A-unsplash.jpg")} />
                        <Text style={style.textHeading}> BERKEMBANGNYA ERA MANUFAKTUR TEKNOLOGI INDUSTRI </Text>
                        <Text style={style.timeCard}> 17 Juni 2022 </Text>
                        <Text style={style.categoriCard}> Manufaktur </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/aron-van-de-pol-tZDtyUrYrFU-unsplash.jpg")} />
                        <Text style={style.textHeading}> PEMILIHAN RAJA BARU DI INGGRIS </Text>
                        <Text style={style.timeCard}> 17 Juni 2022 </Text>
                        <Text style={style.categoriCard}> Manufaktur </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/gracia-dharma-qTlbO6mkQH0-unsplash.jpg")} />
                        <Text style={style.textHeading}> TIPS MENEMUKAN HOBBI UNTUK KESENANGAN </Text>
                        <Text style={style.timeCard}> 2 Mei 2022 </Text>
                        <Text style={style.categoriCard}> Passion </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/tianshu-liu-aqZ3UAjs_M4-unsplash.jpg")} />
                        <Text style={style.textHeading}> HARGA TIKET PERGI BERLIBUR KE OSAKA JEPANG </Text>
                        <Text style={style.timeCard}> 17 Agustus 2022 </Text>
                        <Text style={style.categoriCard}> Wisata </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            

                {/* Content Heding Text*/}
                <View style={{margin: 10, marginLeft: 25}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30, color: '#262626'}}> Update Main Post </Text>
                </View>

                {/* Content */}
                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/Tol-Cisumdawu.jpeg")} />
                        <Text style={style.textHeading}> TARIF TOL CISUMDAWU (CILEUNYI SUMEDANG) 2023, TAK GRATIS LAGI! </Text>
                        <Text style={style.timeCard}> 28 Februari 2023 </Text>
                        <Text style={style.categoriCard}> Manufaktur </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/neermana-studio-SYKYxuT2o5w-unsplash.jpg")} />
                        <Text style={style.textHeading}> BANDUNG SEPI SAAT PANDEMI COVID-19 </Text>
                        <Text style={style.timeCard}> 17 Maret  2022 </Text>
                        <Text style={style.categoriCard}> Wisata </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={style.elemenCard}>
                        <Image style={style.imageCard} source={require("../../assets/img/annie-spratt-QckxruozjRg-unsplash.jpg")} />
                        <Text style={style.textHeading}> BERKEMBANGNYA BIDANG PERUSAHAAN START UP </Text>
                        <Text style={style.timeCard}> 14 Februari 2022 </Text>
                        <Text style={style.categoriCard}> Start-Up </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
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
        borderColor: '#adadad',
        // textShadowColor: 'black',
        backgroundColor: '#adadad',
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
    }
})
