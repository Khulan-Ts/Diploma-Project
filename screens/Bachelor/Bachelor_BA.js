import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Linking  } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";
import data from "../../static.json";
import en from "../../staticEN.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Bachelor_BA = ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    const { apply } = data.links;
    const imagesWithText = data.baImagesWithText;
    let content;
    switch (language) {
        case 'mn':
            content = mn.bachelorBa;
            break;
        case 'ru':
            content = ru.bachelorBa;
            break;
        case 'en':
        default:
            content = en.bachelorBa;
            break;
    }
    useEffect(() => {

    })

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{ flexDirection: "row", marginTop: width * 0.05 }}>
                <View style={{ width: width * 0.1, marginTop: '-2%' }}>
                    <Image source={require('../../assets/images/calligraphy/bachelorba1.png')} style={{ width: 'auto', height: width * 0.3 }} resizeMode="contain" />
                </View>

                <View style={{ width: width * 0.75, marginLeft: width * 0.02, marginBottom: height * 0.1, backgroundColor: 'white', height:  width*0.1, padding: width * 0.01, marginTop: width * -.016, borderRadius: width * 0.008 }}>
                    <FONT type="Title" style={{ fontSize: 25 }}>{content.welcomeTitle}</FONT>
                    <FONT type="Regular" style={{ fontSize: 18 }} lines={3}>{content.welcomeDescription}</FONT>
                </View>
                <View style={{ width: width * 0.1, marginBottom: width * 0.115, marginLeft: 'auto', marginTop: '-2%' }}>
                    <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{ width: 'auto', height: width * 0.5 }} resizeMode="contain" />
                </View>
            </View>
            <View style={{
                backgroundColor: '#F6FAFF',
                borderBottomEndRadius: width * 0.011,
                borderBottomStartRadius: width * 0.011,
                width: width * 0.5,
                marginTop: width * -0.5,
                marginLeft: width * 0.12
            }}>
                <FONT type="Subtitle" style={{ fontSize: 25, marginBottom: width * 0.01 }}>{content.meetOurFaculties}</FONT>

                <ScrollView alwaysBounceHorizontal={true} horizontal showsHorizontalScrollIndicator={false}>
                    {imagesWithText.map(({ source, text }) => (
                        <View key={source} style={{ alignItems: 'center', marginRight: width * 0.015 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    resizeMode='contain'
                                    source={{ uri: source }}
                                    style={{
                                        width: width * 0.108,
                                        height: width*0.15,
                                    }}
                                />
                                <FONT style={{ fontSize: 13, textAlign: 'center' }}>{text}</FONT>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{ marginLeft: width * 0.55, marginTop: width * -0.16, backgroundColor: '#EDF0FF', }}>
                    <View style={[styles.infoContainer, { width: width * 0.17, height: width * 0.115, padding: width * 0.0075, borderRadius: width * 0.022 }]}>
                        <View style={{ flexDirection: 'row', marginTop: width * 0.01 }}>
                            <Clock width={width * 0.02} height={width * 0.04} />
                            <View style={{ marginLeft: width * 0.01 }}>
                                <FONT type="Title2" style={{ fontSize: 18 }}>{content.durationTitle}</FONT>
                                <FONT style={{ fontSize: 18 }}>{content.durationContent}</FONT>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: width * 0.001, }}>
                            <Calendar width={width * 0.02} height={width * 0.02} />
                            <View style={{ marginLeft: width * 0.005 }}>
                                <FONT type="Title2" style={{ fontSize: 18 }}>{content.intakesTitle}</FONT>
                                <FONT style={{ fontSize: 18 }}>{content.intakesContent}</FONT>
                            </View>
                        </View>
                    </View>
                    <Button type="Apply2" text={content.ApplyButton} style={{ marginTop: width * 0.001, marginLeft: width * .002 }} onPress={()=> Linking.openURL(apply)}></Button>
                </View>
                <View style={{ width: width * 0.95, marginTop: width * 0.01 }}>
                    <ExpandableList
                        title={content.admissionRequirementsTitle}
                        content={content.admissionRequirementsContent}
                        maxHeightPercentage={130}
                    />
                    <ExpandableList
                        title={content.curriculumTitle}
                        content={content.curriculumContent}
                        maxHeightPercentage={180}
                    />
                </View>
            </View>
            <View style={{ borderRadius: width * 0.022, borderColor: "#CDD4FB", borderWidth: 1, width: width * 0.45, marginTop: width * 0.025, marginLeft: width * 0.12, shadowColor: '#CDD4FB', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 1, shadowRadius: 2 }}>
                <View style={{ marginLeft: width * 0.01 }}>
                    <FONT type="Title2" style={{ fontSize: 25, marginTop: width * 0.005 }}>{content.skillDevelopmentTitle}</FONT>
                </View>
                <View style={{ marginLeft: width * 0.02, marginBottom: width * 0.01 }}>
                    <FONT type="Regular" style={{ fontSize: 18 }}>
                        {content.skillDevelopmentContent}
                    </FONT>
                </View>
            </View>
            <View style={{ borderRadius: width * 0.022, borderColor: "#CDD4FB", borderWidth: 1, width: width * 0.27, marginLeft: width * 0.576, marginTop: width * -0.173, shadowColor: '#CDD4FB', shadowOffset: { width: 1, height: 2 }, shadowOpacity: 1, shadowRadius: 2, marginBottom: width * 0.1 }}>
                <View style={{ marginLeft: width * 0.01 }}>
                    <FONT type="Title2" style={{ fontSize: 25, marginTop: width * 0.005 }}>{content.careerOpportunityTitle}</FONT>
                </View>
                <View style={{ marginLeft: width * 0.02, marginBottom: width * 0.01 }}>
                <FONT type="Regular" style={{ fontSize: 18 }}>
                        {content.careerOpportunityContent}
                    </FONT>
                </View>
            </View>
            <Footer language={language} />
        </ScrollView>

    );
}

export default Bachelor_BA;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer: {
        backgroundColor: "#EDF0FF",
    }
});
