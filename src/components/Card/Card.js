import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

/*
 * fungsi component card untuk halaman berita
 *
 */
export function Card(){
    return(
        <View>
            <TouchableOpacity style={style.elemenCard}>
                <Image style={style.imageCard} source={require("../../assets/img/deborath-ramos-l-W-A9i4Mwx-A-unsplash.jpg")} />
                <Text style={style.textHeading}> BERKEMBANGNYA ERA MANUFAKTUR TEKNOLOGI INDUSTRI </Text>
                <Text style={style.timeCard}> 17 Juni 2022 </Text>
                <Text style={style.categoriCard}> Manufaktur </Text>
            </TouchableOpacity>
        </View>
    )
}

// component style pada element card
const style =  StyleSheet.create({
    elemenCard: {
        marginTop: 70,
        backgroundColor: 'black',
        borderColor:  'black',
        marginLeft: 30,
        width: 350,
        height: 260,
        borderRadius: 40,
    },
    imageCard: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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