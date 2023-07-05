import React from 'react';
import {  StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Halaman Get Started
const GetStarted=function GetStarted(){
    const navigation = useNavigation();
    
    function handlePress(){
        navigation.navigate('Login'); // Pindah menuju halaman login
    }

    return(
        <ScrollView style={{backgroundColor: 'white'}}>
            <View>
                <Image style={style.mainLogo} source={require("../../assets/LogoMP12.png")} />
            </View>

            <View>

                {/* <View style={{backgroundColor: 'black', height: 200, width: 380, marginLeft: 16, borderRadius: 10, marginTop: 40}}>
                    <Text style={{color: 'white', fontWeight: "600", fontSize: 17, marginTop: 10, padding: 20,}}>Bergabunglah dengan kami dalam perjalanan informatif ini karena kami membawakan Anda berita dan cerita terbaru yang penting. Daily's Paper: Rekan tepercaya Anda untuk tetap terinformasi dan terhubung setiap hari.</Text>
                </View> */}
                
                <TouchableOpacity onPress={handlePress}>
                    <Text style={{ color: "white", fontWeight: "600", fontSize: 24, backgroundColor: 'black', borderWidth: 1, padding: 10, textAlign: 'center', borderRadius: 40, marginTop: 20, width: 280, marginLeft: 65 }}>
                        Get Started
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text style={style.copyrightStyle}> &copy; My Daily's Paper </Text>
                </View>
            </View>
        </ScrollView>
    )
}

// setting property for styling
var {width} = Dimensions.get('window');

// komponen style pada halaman login
const style = StyleSheet.create({
    mainLogo: {
        width: 320,
        height: 130,
        marginTop: 280,
        marginLeft: 55,
        marginBottom: 120,
    },
    // mainLayout: {
    //     height: 450,
    // },
    copyrightStyle: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "JosefinSans_700Bold",
        textAlign: 'center',
    },
})

export default GetStarted;