import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Scholarship= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", marginTop: '5%'}}>
            <View style={{width: width * 0.1, marginTop: '-1.5%', marginRight: 'auto'}}>
                <Image source={require('../../assets/images/calligraphy/scholarcal.png')} style={{width: 'auto', height: width * 0.12}} resizeMode="contain"/>
            </View>
            <View style={{ width: '18%', marginLeft: '-10%'}}>
                <View style={{ borderBottomWidth: 1, width: '90%', paddingBottom: 14, paddingLeft:14}}>
                    <FONT type="Regular" style={{color: '#000000'}}>Admissions</FONT>
                </View>
                <View style={{marginTop: '5%'}}>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"Overview"} onPress={() => navigation.navigate('Overview')}></Button>
                    </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"How to Apply"}></Button>
                    </View>
                        <View style={{borderBottomWidth: 1, width: '70%'}}>
                            <Button type="Secondary" text={"Tuition & Aids"}></Button> 
                    </View>
                    <View>
                        <Button type="Secondary" text={"Scholarship"} onPress={() => navigation.navigate('Scholarship')}></Button>
                    </View>
                </View>
            </View>
            <View style={{marginLeft: '5%'}}>
                <FONT type="Title2" style={{color: '#3D2562'}}>Amount of scholarship granted in the past 5 years:</FONT>
                <View>
                    <Image source={require('../../assets/images/scholarship1.png')} style={{width: 'auto', height: width * 0.1, marginTop: '7%'}}/>
                </View>
            </View>
            <View>
                
            </View>
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto'}}>
            <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
        </View>
    </ScrollView>
  );
}

export default Scholarship

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
