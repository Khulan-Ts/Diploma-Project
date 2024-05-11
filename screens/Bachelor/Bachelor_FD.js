import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Bachelor_FD= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/MBA_teachers/choihui.png'), text: "ASHLEY KIM\nProfessor,\n Department chair" },
        { source: require('../../assets/images/FD_teachers/joeun.png'), text: "JOEUN LEE\nSenior Lecturer" },
        { source: require('../../assets/images/FD_teachers/hyun.png'), text: "JUNG KUK KIM\nAssociate Professor" },
        { source: require('../../assets/images/FD_teachers/lida.png'), text: "SEUNG HUN BAEK\n Senior Lecturer" },
        { source: require('../../assets/images/FD_teachers/battuul.png'), text: "ZHI HONG WANG /Jossy/\nSenior Lecturer" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/calligraphy/FDcal.png')} style={{width: 'auto', height: width * 0.27}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.006, marginBottom: width* 0.02, backgroundColor: 'white', height: width*0.075, padding: width*0.01, marginTop: width*-.016, borderRadius:width*0.005}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF FASHION DESIGN</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} >The Fashion Design (FD) department of MIU equips students with skills needed in the global fashion industry: fashion design, fashion business, social responsibility, communication, and leadership.</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: width * 0.115, marginLeft: 'auto', marginTop: -width*0.02}}>
                    <Image source={require('../../assets/images/bachelorba2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>       
            </View>
            <View style={{
                backgroundColor: '#F6FAFF',
                borderBottomEndRadius: 15,
                borderBottomStartRadius:15,
                width: width*0.5,
                marginTop: width*-0.5,
                marginLeft: width*0.11
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
                                        height:width*0.15,
                                    }}
                                />
                                <FONT style={{fontSize:13, textAlign: 'center'}}>{text}</FONT>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{marginLeft: width*0.57, marginTop: width*-0.17}}>
                            <View style={{width: width * 0.17, height: width* 0.115, backgroundColor:'#EFF0FF', justifyContent:'center', borderRadius:width*0.03, paddingBottom:width*0.0075, paddingTop:width*0.0075}}>
                                <View style={{flexDirection: 'row',marginTop: width*0.001, alignItems:'center', marginLeft:width*0.015}}>
                                    <Clock width={width*0.02} height={width*0.02}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>4 years / Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.001, alignItems:'center', marginLeft:width*0.015}}>
                                    <Calendar width={width*0.02} height={width*0.02}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginLeft: width*0.005, marginTop:width*0.03}} ></Button>
                </View>
                <View style={{width: width*0.95, marginTop: width*0.05}}>
                    <ExpandableList 
                    title="Admission Requirements" 
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={115}
                />
                <ExpandableList
                    title="Curriculum"
                    content={
                        <>
                            <span>
                                <strong>FD curriculum is structured based on four main fields of study: apparel design, project presentation, collection development, and fashion business. The curriculum of the FD Department includes holistic but essential areas of fashion studies to equip FD students with the vision and innovation to be a global leader in the apparel industry. </strong>
                            </span>{'\n'}
                            <span>
                                <strong>&nbsp;&nbsp;1. Apparel Design: </strong>Fashion Design, Surface Design for Fabric, Mongolian Cashmere Products, Sustainability, Applied  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile, Mongolian Costume, Credits Exchange, Design Competition, Internship, Senior Fashion Show.
                             </span>{'\n'}
                             <span>
                                <strong>&nbsp;&nbsp;2. Project Presentation: </strong>Draping, Pattern-drafting, Fit Analysis, Construction Techniques.
                             </span>{'\n'}
                             <span>
                                <strong>&nbsp;&nbsp;3. Collection Development: </strong>Free Drawing, Digital Design, Adobe, Clo3d, Fashion Portfolio.
                             </span>{'\n'}
                             <span>
                                <strong>&nbsp;&nbsp;4. Fashion Business: </strong>Fashion Marketing, Merchandising, Brand Management.
                             </span>

                        </>
                    }
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{flexDirection:'row', width:width, marginTop:width*0.04}}>
                <View style={{backgroundColor:'white',borderRadius: 30, borderWidth: 1,height:width*0.165, width: width*0.43,marginRight:width*0.04, marginLeft: width*0.11,borderColor:'#EDF0FF',shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>Skill Development</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                        {'\n'}• Students will have different opportunities to participate in different &nbsp;&nbsp;fashion events to gain exposure to the fashion industries such as 
                        {'\n'}• Being grounded in a wider range of knowledge and theories of a 
                        {'\n'}  global business.
                        {'\n'}• Training in the strategic decision-making process.
                        {'\n'}• Being able to lead and work on a team.
                        </FONT>
                    </View>  
                </View>
                <View style={{backgroundColor:'white',borderRadius: 30, borderWidth: 1,height:width*0.165, width: width*0.27,borderColor:'#EDF0FF', shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>Career Opportunity</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                        {'\n'}• Fashion Designer
                        {'\n'}• Fashion Brand Manager
                        {'\n'}• Merchandisder
                        {'\n'}• Marketer
                        {'\n'}• Fashion journalist
                        {'\n'}• Fashion illustrator
                        </FONT>
                    </View>  
                </View>
            </View>
            
            <Footer/>
        </ScrollView>
        
    );
}

export default Bachelor_FD;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
});