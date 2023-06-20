import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { InputTextField } from "../InputTextField.js/InputTextField";
import { useNavigation } from "@react-navigation/native";

// fungsi utama pada halaman register
export function Register(){
    const navigation = useNavigation();
    
    function handlePress(){
        navigation.navigate('Login'); // Pindah menuju halaman login
    }
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center", marginBottom: 65}}>
                    <Image style={styles.mainLogo} source={require("../../assets/LogoMP12.png")} />
                    <Text style={[styles.text, { marginTop: 12, fontSize: 22, fontWeight: "500" }]}>My Daily's Paper</Text>
                </View>

                <InputTextField style={styles.inputTitle} title="Username" />
                <InputTextField style={[styles.inputTitle, {marginTop: 12,}]} title="Email" />
                <InputTextField
                    style={{
                        marginTop: 12,
                        marginBottom: 22
                    }}
                    title="Password"
                    isSecure={true}
                />

                {/* <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text> */}

                <TouchableOpacity style={styles.submitContainer}>
                    <Text
                        style={[
                            styles.text,
                            {
                                color: "#FFF",
                                fontWeight: "600",
                                fontSize: 16
                            }
                        ]}
                    >
                        Register
                    </Text>
                </TouchableOpacity>

                <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>--- GET CONNECT REGISTER WITH ---</Text>

                <View style={{ marginTop: 8, flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity>
                        <View style={styles.socialButton}>
                            <Image source={require("../../assets/facebook.png")} style={styles.socialLogo} />
                            <Text style={styles.text}>Facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require("../../assets/google.png")} style={styles.socialLogo} />
                        <Text style={styles.text}>Google</Text>
                    </TouchableOpacity>
                </View>

                <Text
                    style={[
                        styles.text,
                        {
                            fontSize: 14,
                            color: "#ABB4BD",
                            textAlign: "center",
                            marginTop: 24,
                            marginBottom: 20,
                        }
                    ]}
                >
                    Already have an account? <Text style={[styles.text, styles.link]} onPress={handlePress}>Login Now</Text>
                </Text>
            </View>

        </ScrollView>
    );
}

// komponen style pada halaman register
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#151515",
        backgroundColor: "black",
        paddingHorizontal: 30,
        paddingBottom: 120,
        height: 1200,
    },
    text: {
        fontFamily: "Avenir Next",
        color: "#fff",
    },
    socialButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        // borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 10,
        backgroundColor: "#000",
        // shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    link: {
        color: "#0D6EDF",
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: "#0D6EDF",
        fontSize: 16,
        borderRadius: 40,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    mainLogo: {
        width: 270,
        height: 100,
        // marginTop: 80,
        marginLeft: 23,
        marginBottom: 10,
    },
});