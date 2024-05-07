import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import ExpandableList from "../../src/components/drop";
import Footer from "../../src/components/footer";

const Scholarship= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", marginTop: width * 0.05}}>
            <View style={{width: width * 0.1, marginTop: '-1.5%', marginRight: 'auto'}}>
                <Image source={require('../../assets/images/scholarcal.png')} style={{width: 'auto', height: width * 0.13}} resizeMode="contain"/>
            </View>
            <View style={{ width: width * 0.18, marginLeft: '1%'}}>
                <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                    <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>Admissions</FONT>
                </View>
                <View style={{}}>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"Overview"} onPress={() => navigation.navigate('Over View')}></Button>
                    </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"How to Apply"}></Button>
                    </View>
                        <View style={{borderBottomWidth: 1, width: '70%'}}>
                            <Button type="Secondary" text={"Tuition & Aids"} onPress={() => navigation.navigate('Tuition & Aids')} ></Button> 
                    </View>
                    <View>
                        <Button type="Secondary" text={"Scholarship"} onPress={() => navigation.navigate('Scholarship')} isPressedState={true}></Button>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'column', marginRight: width * 0.09, marginLeft: width * 0.05}}>
                <FONT type="Title2" style={{color: '#3D2562', fontSize: 28}}>Amount of scholarship granted in the past 5 years:</FONT>
                <View style={{width: width * 0.1}}>
                    <Image source={require('../../assets/images/scholarship1.png')} style={{width: width * 0.5, height: width * 0.15, marginTop: width * 0.02}} resizeMode="contain"/>
                </View>
            </View>
        
        <View style={{marginTop: width * 0.22, width: width * 0.32, position: 'absolute', marginLeft: width * 0.1}}>
            <ExpandableList 
                title="Admission Scholarship" 
                content="All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process."
                maxHeightPercentage={180}
            />
            <ExpandableList
                title="MIU Academic Scholarship"
                content="Content for item 2"
                maxHeightPercentage={180}
            />
        </View>
        <View style={{marginTop: width * 0.22, width: width * 0.32, position: 'absolute', marginLeft: width * 0.35}}>
            <ExpandableList 
                title="Student Union Scholarship" 
                content="All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process."
                maxHeightPercentage={180}
            />
            <ExpandableList
                title="Financial Aid Scholarship"
                content="Content for item 2"
                maxHeightPercentage={180}
            />
        </View>
        <View style={{marginTop: width * 0.22, width: width * 0.32, position: 'absolute', marginLeft: width * 0.6}}>
            <ExpandableList 
                title="Korean Diaspora Scholarship" 
                content="All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process."
                maxHeightPercentage={180}
            />
            <ExpandableList
                title="Disability Support Scholarship"
                content="All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process."
                maxHeightPercentage={180}
            />
        </View>      
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto', marginBottom: width * 0.1}}>
            <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
        </View>
        <Footer/>
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
