import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const Graduate= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: width * 0.05}}>
      <View style={{width: width * 0.1, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/gradcal.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
      </View>
      <View style={{ width: width * 0.18, marginLeft: '1%'}}>
            <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>Academics</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Undergraduate"} onPress={() => navigation.navigate('Undergraduate')}></Button>
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')} isPressedState={true}></Button>
                </View>
                    <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                <Button type="Secondary" text={"2+2 program"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{width: width * 0.52, marginBottom: height * 0.1, marginLeft: width * 0.02}}>
          <FONT type={"Subtitle2"} style={{ color: '#3D2562', fontSize: 23}}>Master Program</FONT>
          <FONT type={"Body"}style={{marginTop: width * 0.016, color: '#3D2562', marginBottom: '2%', fontSize: 18}}>MIU challenges students to explore innovative intellectual interests through scholarly and personal competency programs. Emphasizing on professionalism, MIU students learn to make new connections in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. </FONT>
          <View style={{backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>School of Management (SoM)</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={'Master in Business Administration (MBA)'} onPress={()=>navigation.navigate("Master MBA")}>
            </Button>
          </View>
          <View style={{marginTop: width * 0.01, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>School of Computing Science (SoCS)</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={'Master of Sofware Engineering (MSE)'} onPress={()=>navigation.navigate("Master SE")}>
            </Button>
          </View>
          <View style={{marginTop: width * 0.01, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>School of International Studies and Communication (SoISC)</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={'Master in Public Administration (MPA)'} onPress={()=> navigation.navigate("Master Public")}>
            </Button>
          </View>
          <View style={{marginTop: width * 0.01, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>Programs</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={'Master In Foreign Language Education (FLE)'} onPress={()=>navigation.navigate("Master FLE")}>
            </Button>
          </View>
        </View>
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto',marginBottom: width * 0.1}}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default Graduate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
