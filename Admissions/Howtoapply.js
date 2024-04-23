import React, {useState} from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../src/components/Titles";
import Button from "../src/components/Button";
import ToolTip from "../src/components/Tooltip";

const Howtoapply= ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{marginLeft: '11%', width: '18%'}}>
            <View style={{ borderBottomWidth: 1, width: '60%', paddingBottom: 14, paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Admissions</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: 1, width: '50%'}}>
                    <Button type="Secondary" text={"Overview"} onPress={() => navigation.navigate('Overview')} isPressedState={true} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '50%'}}>
                    <Button type="Secondary" text={"How to Apply"} onPress={() => navigation.navigate('How to Apply')}></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: '50%'}}>
                <Button type="Secondary" text={"Tuition & aids"} onPress={() => navigation.navigate('Tuition & Aids')}></Button> 
                </View>
                <View style={{borderBottomWidth: 1, width: '50%'}}>
                    <Button type="Secondary" text={"Scholarship"} numberOfLines={2} style={{width: width * 0.15}} onPress={() => navigation.navigate('Scholarship')}></Button>
                </View>
            </View>
        </View>
        <View style={{flexDirection: "row", width: '60%'}}>
            <View style={{borderRightWidth: 1, height: "20%", width: '50%', alignItems: 'center'}}>
                <Button type="Secondary" text={"Undergraduate Programs"} style={{width: width * 0.20}}  onPress={() => navigation.navigate('Undergraduate Programs')}></Button>
            </View>
            <View>
                <Button type="Secondary" text={"Graduate Programs"} style={{width: width * 0.20}} onPress={() => navigation.navigate('Graduate Programs')}></Button>
            </View>
        <View style={{flexDirection: "row", width: '60%'}}>
            
        </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Howtoapply

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fcfc"
  },
});