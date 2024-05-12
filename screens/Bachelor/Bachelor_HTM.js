import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Bachelor_HTM= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/htm_teachers/teacher1.png'), text: "CHOI HUI PARK\nProfessor,\n Department chair" },
        { source: require('../../assets/images/htm_teachers/teacher2.png'), text: "VICTOR NGU\n Professor" },
        { source: require('../../assets/images/htm_teachers/teacher3.png'), text: "JUNG KUK KIM\nAssociate Professor" },
        { source: require('../../assets/images/htm_teachers/teacher4.png'), text: "SEUNG HUN BAEK\n Senior Lecturer" },
        { source: require('../../assets/images/htm_teachers/secretary.png'), text: "UNDRAKH \nMUNKHBAATAR\nSecretary" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05, height: width * 0.58}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/bachelorba1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, backgroundColor: 'white', height: width*0.08, padding: width*0.01, marginTop: width*-0.016, borderRadius: width * 0.008}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF HOTEL AND TOURISM MANAGEMENT</FONT>
                    <FONT type="Regular" style={{fontSize: 18, padding: width*0.005}} lines={3}>The Bachelor of Hotel and Tourism Management is designed to prepare 
                    you for professional and managerial roles in the global tourism and hotel industries. Emphasis is placed in major areas within 
                    tourism and hotel businesses.</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto', marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
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
                <FONT type="Subtitle" style={{fontSize:25, marginBottom: width*0.01}}>Meet our Faculties</FONT>

                <ScrollView alwaysBounceHorizontal={true} horizontal showsHorizontalScrollIndicator={false}>
                    {imagesWithText.map(({ source, text }) => (
                        <View key={source} style={{ alignItems:'center',marginRight: width*0.015}}>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    resizeMode='contain'
                                    source={source}
                                    style={{
                                        width: width*0.108,
                                        height:height*0.25,
                                    }}
                                />
                                <FONT style={{fontSize:13, textAlign: 'center'}}>{text}</FONT>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{marginLeft: width*0.58, marginTop: width*-0.16}}>
                            <View style={[styles.infoContainer, {width: width * 0.16, height: width* 0.090, padding: width * 0.0075, borderRadius: width * 0.022}]}>
                                <View style={{flexDirection: 'row'}}>
                                    <Clock width={width * 0.02} height={width * 0.04}/>
                                    <View style={{marginLeft: width*0.007}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>4 years/ Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Calendar width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: width*0.007}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: width*0.008, marginLeft: width*.002}} ></Button>
                </View>
                <View style={{width: width*0.99, marginTop: width*0.02}}>
                    <ExpandableList 
                    title="Admission Requirements" 
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={130}
                />
                <ExpandableList
                    title="Curriculum"
                    content="Download checklist"
                    maxHeightPercentage={180}
                />
                </View>
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.45,marginTop: width*0.020, marginLeft: width*0.12, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Skill Development</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                {'\n'}• Being equipped to be competent in a global business environment.
                {'\n'}• Being grounded in a wider range of knowledge and theories of a 
                {'\n'}  global business.
                {'\n'}• Training in the strategic decision-making process.
                {'\n'}• Being able to lead and work on a team.
                {'\n'}• Being aware of ethical and socially responsible issues.
                {'\n'}• Being equipped with strong communication and networking skills.
                </FONT>
            </View>  
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.29, marginLeft: width*0.577, marginTop: width*-0.173, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Career Opportunity</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                {'\n'}• Advertising and Marketing
                {'\n'}• Accountancy
                {'\n'}• Human Resources
                {'\n'}• Banking including Investment Banking
                {'\n'}• Sales and Retail
                {'\n'}• Management Consultancy
                {'\n'}• Business Journalism
                </FONT>
            </View>  
            </View>
            <Footer/>
        </ScrollView>
        
    );
}

export default Bachelor_HTM;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer:{
        backgroundColor: "#EDF0FF"
    }
});