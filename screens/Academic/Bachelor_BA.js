import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Bachelor_BA= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
        const images = [
            require('../../assets/images/choihuipark.png'),
            require('../../assets/images/choihuipark.png'),
            require('../../assets/images/choihuipark.png'),
            require('../../assets/images/choihuipark.png'),
            require('../../assets/images/choihuipark.png'),
        ]
    return (
        <ScrollView
        style={styles.container}
      >
        <View style={{flexDirection: "row", marginTop: width * 0.05}}>
            <View style={{width: width * 0.1, marginTop: '-2%'}}>
                <Image source={require('../../assets/images/bachelorba1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
            </View>
         
            <View style={{width: width * 0.75, marginLeft: width * 0.02, marginBottom: height * 0.1, backgroundColor: 'white', height: height*0.2, padding: width*0.01, marginTop: width*-.016}}>
                <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF BUSSINESS ADMINISTRATION</FONT>
                <FONT type="Regular" style={{fontSize: 18}} lines={3}>Business Administration Department (BA) trains in managerial
               discipline and educates students how to effectively compete in the international business environment. 
               Students are instructed to handle dynamic decision-making process problems in an era of globalization 
               and information revolution in the world.</FONT>
            </View>
            <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto', marginTop: '-2%'}}>
                <Image source={require('../../assets/images/bachelorba2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
            </View>       
        </View>
        <View style={{
            backgroundColor: '#F6FAFF',
            borderBottomEndRadius: 15,
            borderBottomStartRadius:15,
            width: width*0.5,
            marginTop: width*-0.5,
            marginLeft: width*0.12
        }}>
        <FONT type="Subtitle" style={{fontSize:25, marginBottom: width*0.01}}>Meet out Faculties</FONT>

        
        <ScrollView alwaysBounceHorizontal={true} horizontal showsHorizontalScrollIndicator={false}>
            {images.map((source) => (
                <View key={source} style={{ alignItems:'center',marginRight: width*0.015

                }}>
                    <Image
                    source={source}
                    style={{
                        width: width*0.108,
                        resizeMode:'contain',
                        height:height*0.25,
                        
                    }}/>
                    <FONT style={{fontSize:13}}>awdwafe</FONT>
                </View>
            ))}
            </ScrollView>
        </View>
        </ScrollView>
        );
        }

export default Bachelor_BA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});