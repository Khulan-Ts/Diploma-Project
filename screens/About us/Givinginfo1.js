import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const Givinginfo1= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
        <View style={{flexDirection: "row", marginTop: width * 0.05}}>
            <View style={{width: width * 0.1, marginTop: '-2%', marginRight: 'auto'}}>
                <Image source={require('../../assets/images/givingcal.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
            </View>
      
           
                <View style={{width: '18%', marginLeft: '1%'}}>
                    <View style={{marginTop: '5%'}}>
                        <View style={{borderBottomWidth: 1, width: '70%'}}>
                            <Button type="Secondary" text={"About us"} isPressedState={true} ></Button>
                        </View>
                        <View style={{borderBottomWidth: 1, width: '70%'}}>
                            <Button type="Secondary" text={"Our people"} onPress={() => navigation.navigate('Our people')}></Button>
                        </View>
                            <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('Plan and Report')}></Button> 
                        </View>
                        <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
                    </View>
                </View>
                
           
            <View style={{flexDirection: 'column'}}> 
            <View style={{ width: width * 0.6, height: width * 0.12, marginTop: 20, backgroundColor: '#EDF0FF', padding: width * 0.01}}>
                <FONT type='Title2'style={{ color: '#3D2562', fontSize: 23 }}>
                Please Consider Making a Gift to the Annual Fund 
                </FONT>
                <FONT style={{marginTop: width * 0.005, color: '#3D2562', fontSize: 20  }}>Your support now, with a donation of any amount, is vital to ensure we have the resources to continue to honor our vision to be the preeminent intellectual and creative center for effective engagement in a world that increasingly demands better-designed objects, communication, systems, and organizations to meet social needs.</FONT>
            </View>
            <View style={{ width: width * 0.6, height: width * 0.12, marginTop: width *0.02, backgroundColor: '#EDF0FF', marginLeft: '-30%' }}>
                    <FONT type='Title2' style={{color: '#3D2562', fontSize: 20}}>
                    Support Our School
                    </FONT>
                    <FONT style={{marginTop: width * 0.005, color: '#3D2562', fontSize: 20  }}>Your support now, with a donation of any amount, is vital to ensure we have the resources to continue to honor our vision to be the preeminent intellectual and creative center for effective engagement in a world that increasingly demands better-designed objects, communication, systems, and organizations to meet social needs.</FONT>

                </View>
            </View>

            
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto'}}>
          <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default Givinginfo1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
