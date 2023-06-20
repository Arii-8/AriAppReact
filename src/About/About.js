import { Linking, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, ScrollView, } from "react-native";
import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
// import LinearGradient from "react-native-linear-gradient";
  
  export function About(){
    return (
      <>
        <ScrollView>
          <View style={styles.aboutContainer}>
          <Text style={styles.mainHeader}> My Daily's Paper </Text>
          <Text style={styles.paraStyle}> About Our Company </Text>
    
          <View>
            <Image style={styles.imgStyle1} source={require("../../assets/LogoMP12.png")} />
          </View>

          {/* profil image */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {/* Profil Arizal */}
            <Image style={styles.imgStyle} source={require("../../assets/profilarizal.png")} />
          {/* Profil Nabilla */}
            <Image style={styles.imgStyle} source={require("../../assets/profilnabila.png")} />
          {/* Profil Giri */}
            <Image style={styles.imgStyle} source={require("../../assets/profilgiri.png")} />
          {/* Profil niki */}
            <Image style={styles.imgStyle} source={require("../../assets/profilniki.png")} />
          {/* Profil Irgi */}
            <Image style={styles.imgStyle} source={require("../../assets/profilirgi.png")} />
          {/* Profil Vina */}
            <Image style={styles.imgStyle} source={require("../../assets/profilvina.png")} />
          {/* Profil Hadi */}
            <Image style={styles.imgStyle} source={require("../../assets/profilhadi.png")} />
          </View>
    
          <View style={styles.aboutLayout}>
            <Text style={[styles.aboutSubHeader]}> Tentang Kami </Text>
            <Text style={[styles.paraStyle, styles.aboutPara, {fontSize: 23}]}>
            Daily's Papper, kami berdedikasi untuk menyampaikan berita 
            dan informasi terkini kepada pembaca kami setiap hari. Sebagai 
            sumber informasi tepercaya, kami berusaha agar pembaca selalu 
            mendapat informasi, terlibat, dan terhubung dengan dunia di sekitar mereka.
            </Text>
          </View>

          <View style={styles.aboutLayout}>
            {/* Developer Mobile React Native */}
            <Text style={[styles.paraStyle, {textAlign: 'center', paddingTop: 30,}]}>
            Developer Mobile React Native
            </Text>
            <Text style={styles.aboutSubHeader}> Arizal Sabila Nurhikam - 17213042 </Text>
            <Text style={styles.aboutSubHeader}> Niki Marco - 17213030 </Text>
            <Text style={styles.aboutSubHeader}> Giri Van Transco - 17213029 </Text>


            {/* UI/UX Mobile React Native */}
            <Text style={[styles.paraStyle, {textAlign: 'center', paddingTop: 30,}]}>
            UI/UX Mobile React Native
            </Text>
            <Text style={styles.aboutSubHeader}> Irgi Mahendrata Saputra - 17211005 </Text>
            <Text style={styles.aboutSubHeader}> Hadi Mirojul Falah - 17211021 </Text>
            <Text style={styles.aboutSubHeader}> Nabilla Putri Sahara - 17211018 </Text>
            <Text style={styles.aboutSubHeader}> Vina Agustina - 17211013 </Text>
          </View>
    
          {/* <Text style={styles.mainHeader}> Follow me on Social Network </Text> */}
    
          <View style={styles.menuContainer}>

            <View style={{marginTop: 50,}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: -4, }}>
                  <Image style={styles.imgStyle2} source={require("../../assets/profilarizal.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Arizal Sabila Nurhikam </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: -30,}}>
                  <Image style={styles.imgStyle2} source={require("../../assets/profilnabila.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Nabilla Putri Sahara </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: -62,}}>
                  <Image ge style={styles.imgStyle2} source={require("../../assets/profilgiri.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Giri Van Transco </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: -116,}}>
                  <Image style={styles.imgStyle2} source={require("../../assets/profilniki.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Niki Marco </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: 20,}}>
                  <Image style={styles.imgStyle2} source={require("../../assets/profilirgi.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Irgi Mahendrata Saputra </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: -82,}}>
                  <Image style={styles.imgStyle2} source={require("../../assets/profilvina.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Vina Agustina </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginLeft: -37,}}>
                  <Image style={styles.imgStyle2} source={require("../../assets/profilhadi.png")} />
                  <Text style={{marginTop: 30, fontSize: 23,}}> Hadi Mirojul Falah </Text>
                </View>
            </View>          
          </View>
        </View>
        </ScrollView>

          <View>
            <Navbar/>
          </View>
      </>
    );
  };
  
  // setting property for styling
var {width} = Dimensions.get('window');
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
      // backgroundColor: "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
    },
  
    imgStyle: {
      width: 53,
      height: 53,
      borderRadius: 100,
      marginBottom: 20,
    },
    imgStyle1: {
      width: 320,
      height: 130,
      marginLeft: 15,
      marginBottom: 35,
    },
    imgStyle2: {
      width: 93,
      height: 93,
      borderRadius: 10,
    },

    mainHeader: {
      fontSize: 18,
      color: "#212F3C",
      textTransform: "uppercase",
      fontWeight: "500",
      marginTop: 50,
      marginBottom: 10,
      fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
      fontSize: 28,
      color: "#7d7d7d",
      paddingBottom: 30,
      textAlign: 'center',
    },
    aboutLayout: {
      // backgroundColor: "black",
      backgroundColor: '#212F3C',
      paddingHorizontal: 30,
      // marginVertical: 30,
      width: width * 1,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      // color: 'violet',
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      fontFamily: "JosefinSans_700Bold",
      alignSelf: "center",
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
    footer: {
      width: width * 1,
      height: 100,
      backgroundColor: 'black',
      marginTop: 50,
      display: 'flex',
    }
  });
  