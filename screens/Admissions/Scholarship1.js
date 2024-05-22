import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import ExpandableList from "../../src/components/drop";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Scholarship= ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    let content;
    switch (language){
    case 'mn':
      content = mn.scholarshipMN;
      break;
    case 'ru':
      content = ru.scholarshipRU;
      break;
    case 'en':
      content = data.scholarshipEN;
      break;
  }
    return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", marginTop: width * 0.05}}>
            <View style={{width: width * 0.1, marginTop: '-1.5%', marginRight: 'auto'}}>
                <Image source={require('../../assets/images/scholarcal.png')} style={{width: 'auto', height: width * 0.13}} resizeMode="contain"/>
            </View>
            <View style={{ width: width * 0.18, marginLeft: '1%'}}>
                <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                    <FONT type="Regular" style={{fontSize: 28}}>{content.AdmissionsTitle}</FONT>
                </View>
                <View style={{}}>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={content.AdmissionsButton1} onPress={() => navigation.navigate('Over View')}></Button>
                    </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={content.AdmissionsButton2}onPress={()=> navigation.navigate('How To Apply UnderGraduate')}></Button>
                    </View>
                    <View>
                        <Button type="Secondary" text={content.AdmissionsButton3} onPress={() => navigation.navigate('Scholarship')} isPressedState={true}></Button>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'column', marginRight: width * 0.09, marginLeft: width * 0.05}}>
                <FONT type="Title2" style={{color: '#3D2562', fontSize: 28}}>{content.ScholarshipTitle}</FONT>
                <View style={{width: width * 0.1}}>
                    <Image source={require('../../assets/images/scholarship1.png')} style={{width: width * 0.5, height: width * 0.15, marginTop: width * 0.02}} resizeMode="contain"/>
                </View>
            </View>
        
        <View style={{marginTop: width * 0.22, width: width * 0.32, position: 'absolute', marginLeft: width * 0.1}}>
            <ExpandableList 
                title={content.DropdownTitle1}
                content= {content.DropdownContent1}
                maxHeightPercentage={180}
            />
            <ExpandableList
                title={content.DropdownTitle2}
                content= {content.DropdownContent2}
                maxHeightPercentage={180}
            />
        </View>
        <View style={{marginTop: width * 0.22, width: width * 0.32, position: 'absolute', marginLeft: width * 0.35}}>
            <ExpandableList 
                title={content.DropdownTitle3}
                content= {content.DropdownContent3}
                maxHeightPercentage={180}
            />
            <ExpandableList
                title={content.DropdownTitle4}
                content= {content.DropdownContent4}
                maxHeightPercentage={180}
            />
        </View>
        <View style={{marginTop: width * 0.22, width: width * 0.32, position: 'absolute', marginLeft: width * 0.6}}>
            <ExpandableList 
                title={content.DropdownTitle5}
                content= {content.DropdownContent5}
                maxHeightPercentage={180}
            />
            <ExpandableList
                title={content.DropdownTitle6}
                content= {content.DropdownContent6}
                maxHeightPercentage={180}
            />
        </View>      
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto', marginBottom: width * 0.1}}>
            <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
        </View>
        <Footer language={language}/>
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
