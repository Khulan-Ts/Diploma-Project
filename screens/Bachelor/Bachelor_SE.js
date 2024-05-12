import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Bachelor_SE= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/CS_teachers/junghopark.png'), text: "JUNG HO PARK\nAssociate Professor,\n Department chair" },
        { source: require('../../assets/images/CS_teachers/steveneisenbarth.png'), text: "STEVEN EISENBARTHE\nProfessor" },
        { source: require('../../assets/images/CS_teachers/dulguundusal.png'), text: "DULGUUNDUSAL T.\nLecturer" },
        { source: require('../../assets/images/CS_teachers/dulamsuren.png'), text: "DULAMSUREN SHARKHUU\nAssistant Professor" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/calligraphy/FDcal.png')} style={{width: 'auto', height: width * 0.27}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.006, marginBottom: width* 0.02, backgroundColor: 'white', height: width*0.09, padding: width*0.01, marginTop: width*-.016, borderRadius:width*0.005}}>
                    <FONT type="Title" style={{fontSize: 25}}>Welcome to the Department of SOFTWARE ENGINEERING</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} >Software Engineering major at MIU offers opportunities to explore the science of information processing. Particular interest is placed on making computation fast and efficient. SE focuses on the core theories of computing as well as hands-on learning and practical work experiences.</FONT>
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
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%)\n \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={115}
                />
                <ExpandableList
                    title="Curriculum"
                    content={<FONT>
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 1 / Students are introduced to:\n"}</FONT>
                        {"Foundation of basic coding                                                                                Foundation in mathematics and physics\n"}
                        {"Teamwork skills\n"}
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 2 / Students develop skills in:\n"}</FONT>
                        {"Computer science theories, methods and practices                              Understanding of computer software, tools and design\n"}
                        {"Understanding a range of programming languages                             Problem-solving and analytical skills\n"}
                        {"such as Java, C, C++, Javascript and SQL\n"}
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 3 / Students gain knowledge in:\n"}</FONT>
                        {"Mobile application programming                                                                   Multimedia Programming\n"}
                        {"Computer Security                                                                                                 Web development and web design\n"}
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 4 / Students move into:\n"}</FONT>
                        {"Advanced programming skills                                                                          Cloud Computing\n"}
                        {"Robotics                                                                                                                      Artificial Intelligence"}
                      </FONT>}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{flexDirection:'row', width:width, marginTop:width*0.04}}>
                <View style={{backgroundColor:'white',borderRadius: 30, borderWidth: 1,height:width*0.18, width: width*0.19,marginRight:width*0.01, marginLeft: width*0.11,borderColor:'#EDF0FF',shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius:2}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01, marginBottom:width*0.01}}>Skills</FONT>
                    </View>
                    <View style={{marginBottom: width*0.01, marginLeft: width*0.01}}> 
                        <FONT lines={6} type="Regular" style={{fontSize: 18}}>
                            Skills you will develop in CS department are problem-solving, 
                            critical thinking, creativity, coding, task management, efficiency, etc
                        </FONT>
                    </View>  
                </View>
                <View style={{backgroundColor:'white',borderRadius: 30, borderWidth: 1,height:width*0.18, width: width*0.33,marginRight:width*0.01,borderColor:'#EDF0FF', shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01, marginBottom:width*0.01}}>We connect</FONT>
                    </View>
                    <View style={{marginBottom: width*0.01, marginLeft: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                            Full stack developer                          System administrator
                            {'\n'}Database administrator                Data scientist
                            {'\n'}Computer hardware                        Systems analyst
                            {'\n'}engineer                                                 Multimedia animator
                            {'\n'}Systems software developer
                        </FONT>
                    </View>  
                </View>
                <View style={{backgroundColor:'white',borderRadius: 30, borderWidth: 1,height:width*0.18, width: width*0.2,borderColor:'#EDF0FF', shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01, marginBottom:width*0.01}}>Alumni</FONT>
                    </View>
                    <View style={{marginBottom: width*0.01,marginLeft: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                            CS graduates are employed at many well known companies such as Khan Bank, Unitel Group,
                            Oyu Tolgoi LLC, Hurd Group, Nomin Holding, Khas Bank, Khangai LLC, IT Zone, CAA Mongolia, etc.
                        </FONT>
                    </View>  
                </View>
            </View>
            
            <Footer/>
        </ScrollView>
        
    );
}

export default Bachelor_SE;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
});