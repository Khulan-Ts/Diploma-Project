import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const Undergraduate= ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: width * 0.05}}>
        <View style={{width: width * 0.1, marginTop: '-2%'}}>
            <Image source={require('../../assets/images/calligraphy/undergradcal.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
        </View>
        <View style={{marginLeft: '1%', width: width * 0.18}}>
            <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft:width * 0.01}}>
                <FONT type="Regular" style={{color: "#000", fontSize: 28}} >Academics</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Undergraduate"} onPress={() => navigation.navigate('Undergraduate')} isPressedState={true} ></Button>
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')}></Button>
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
        <View style={{width: width * 0.52, marginLeft: width * 0.02, marginBottom: height * 0.1}}>
            <FONT type="Subtitle2" style={{fontSize: 23}}>Degree Programs</FONT>
            <FONT type="Body" style={{ marginTop: width * 0.016, fontSize: 18}}>MIU challenges students to explore innovative intellectual interests through scholarly and personal competency programs. Emphasizing on professionalism, MIU students learn to make new connections in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. </FONT>
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: '2%'}}>
                <FONT type="Subtitle2" style={{fontSize: 23}} >School of Management (SoM)</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of Business Administration"} style={{color: '#000000', marginTop: width * 0.01}} onPress={()=>navigation.navigate('Bachelor BA')}></Button>
                <Button type="Seven" text={"Department of Hotel & Tourism Management"} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015,}} onPress={()=>navigation.navigate('Bachelor HTM')}></Button>
            </View> 
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: width * 0.02}}>
                <FONT type="Subtitle2" style={{fontSize: 23}} >School of Computing Science (SoCS)</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of Sofware Engineering (SE)"} style={{color: '#000000', marginTop:width *0.01,}} onPress={()=>navigation.navigate('Bachelor SE')}></Button>
                <Button type="Seven" text={"Department of Computer Science (CS)"} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015}} onPress={()=>navigation.navigate('Bachelor CS')}></Button>
            </View> 
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: width * 0.02}}>
                <FONT type="Subtitle2" style={{fontSize: 23}}>School of International Studies and Communication (SoISC)</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of International Relations (IR)"} style={{color: '#000000', marginTop:width *0.01}}  onPress={()=>navigation.navigate('Bachelor IR')}></Button>
                <Button type="Seven" text={"Department of Media & Communication (MC)"} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015}}  onPress={()=>navigation.navigate('Bachelor MC')}></Button>
            </View>
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: width * 0.02}}>
                <FONT type="Subtitle2" style={{fontSize: 23}} >Programs</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of English Education (EE)"} style={{color: '#000000', marginTop:width *0.01}} onPress={()=>navigation.navigate('Bachelor EE')}></Button>
                <Button type="Seven" text={"Department of Fashion Design (FD)"} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015}} onPress={()=> navigation.navigate('Bachelor FD')}></Button>
            </View>
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of Music Education (ME)"} style={{color: '#000000', marginTop:width *0.01}}  onPress={()=>navigation.navigate('Bachelor ME')}></Button>
            </View>
            
        </View>
        <View style={{width: width * 0.1, marginBottom: width * 0.1, marginLeft: 'auto', marginTop: '-2%'}}>
            <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default Undergraduate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});