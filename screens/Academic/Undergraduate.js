import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import en from "../../staticEN.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Undergraduate= ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    const undergraduateEN = en.undergraduateEN;
    const undergraduateMN = mn.undergraduateMN;
    const undergraduateRU = ru.undergraduateRU;

    
    let content;
    switch (language){
    case 'mn':
        content = undergraduateMN;
        break;
    case 'ru':
        content = undergraduateRU;
        break;
    case 'en':
        content = undergraduateEN;
        break;
  }
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
                <FONT type="Regular" style={{color: "#000", fontSize: 28}} >{content.AcademicTitle}</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={content.AcademicButton1} onPress={() => navigation.navigate('Undergraduate')} isPressedState={true} ></Button>
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={content.AcademicButton2} onPress={() => navigation.navigate('Graduate')}></Button>
                </View>
                    <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                <Button type="Secondary" text={content.AcademicButton3} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={content.AcademicButton4} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
                <Button type="Secondary" text={content.AcademicButton5} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{width: width * 0.52, marginLeft: width * 0.02, marginBottom: height * 0.1}}>
            <FONT type="Subtitle2" style={{fontSize: 23}}>{content.DegreeProgram}</FONT>
            <FONT type="Body" style={{ marginTop: width * 0.016, fontSize: 18}}>{content.DegreeDescription}</FONT>
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: '2%'}}>
                <FONT type="Subtitle2" style={{fontSize: 23}} >{content.SomTitle}</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={content.BAButton} style={{color: '#000000', marginTop: width * 0.01}} onPress={()=>navigation.navigate('Bachelor BA')}></Button>
                <Button type="Seven" text={content.HTMButton} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015,}} onPress={()=>navigation.navigate('Bachelor HTM')}></Button>
            </View> 
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: width * 0.02}}>
                <FONT type="Subtitle2" style={{fontSize: 23}} >{content.SoCSTitle}</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={content.SEButton} style={{color: '#000000', marginTop:width *0.01,}} onPress={()=>navigation.navigate('Bachelor SE')}></Button>
                <Button type="Seven" text={content.CSButton} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015}} onPress={()=>navigation.navigate('Bachelor CS')}></Button>
            </View> 
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: width * 0.02}}>
                <FONT type="Subtitle2" style={{fontSize: 23}}>{content.SoISCTitle}</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={content.IRButton} style={{color: '#000000', marginTop:width *0.01}}  onPress={()=>navigation.navigate('Bachelor IR')}></Button>
                <Button type="Seven" text={content.MCButton} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015}}  onPress={()=>navigation.navigate('Bachelor MC')}></Button>
            </View>
            <View style={{backgroundColor: '#EDF0FF', height: width * 0.024, marginTop: width * 0.02}}>
                <FONT type="Subtitle2" style={{fontSize: 23}} >{content.ProgramTitle}</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={content.EEButton} style={{color: '#000000', marginTop:width *0.01}} onPress={()=>navigation.navigate('Bachelor EE')}></Button>
                <Button type="Seven" text={content.FDButton} style={{color: '#000000', marginTop:width *0.01, marginLeft: height * 0.015}} onPress={()=> navigation.navigate('Bachelor FD')}></Button>
            </View>
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={content.MEButton} style={{color: '#000000', marginTop:width *0.01}}  onPress={()=>navigation.navigate('Bachelor ME')}></Button>
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