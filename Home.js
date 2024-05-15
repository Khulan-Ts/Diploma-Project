import React from "react";
import { StyleSheet, Image, View, ScrollView, useWindowDimensions, Linking } from "react-native";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import OverlayImage from "./src/components/OverlayImage";
import HoverButton from "./src/components/hoverButtons";
import Footer from "./src/components/footer";
import data from "./static.json";

const HomeScreen = ({ navigation, isTranslated }) => {
  const { width } = useWindowDimensions();
  const { apply } = data.links;
  const homepageEN = data.homepageEN;
  const homepageMN = data.homepageMN;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require("./assets/images/overlay_ellipse.png")}
        style={[styles.image, { height: width * 0.6, position: 'absolute', marginTop: '-0.1%', zIndex: 2 }]}
      />
      <Image
        source={{ uri: isTranslated ? homepageMN.welcomeImage : homepageEN.welcomeImage }}
        style={[styles.image, { height: width * 0.6 }]}
      />

      <View style={{ position: 'absolute', alignItems: 'center', zIndex: 6, alignSelf: 'center', marginTop: '18%' }}>
        <FONT style={{ fontSize: 36, color: '#fff', textAlign: 'center' }}>
          {isTranslated ? homepageMN.title1 : homepageEN.title1}
        </FONT>
        <FONT type="Title3" style={{ width: width * 0.6, fontSize: 72, lineHeight: width * 0.059, textAlign: 'center', color: '#fff', zIndex: 6 }}>
          {isTranslated ? homepageMN.title2 : homepageEN.title2}
        </FONT>
      </View>

      <View style={{ alignItems: 'center', marginTop: '-10%', zIndex: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <HoverButton icon={require("./assets/icons/teachers.png")} text={isTranslated ? homepageMN.hoverText1: homepageEN.hoverText1} number={isTranslated ? homepageMN.hoverNum1: homepageEN.hoverNum1}></HoverButton>
          <HoverButton icon={require("./assets/icons/research.png")} text={isTranslated ? homepageMN.hoverText2: homepageEN.hoverText2} number={isTranslated ? homepageMN.hoverNum2: homepageEN.hoverNum2} style={{ marginLeft: width * 0.03 }}></HoverButton>
          <HoverButton icon={require("./assets/icons/department.png")} text={isTranslated ? homepageMN.hoverText3: homepageEN.hoverText3} number={isTranslated ? homepageMN.hoverNum3: homepageEN.hoverNum3} style={{ marginLeft: width * 0.03 }}></HoverButton>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: width * 0.05 }}>
        
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={[styles.history, { width: width * 0.49, marginBottom: width * 0.002 }]}>
            <FONT type="Title3" style={{ textAlign: 'center', fontSize: 36 }}>
              {isTranslated ? homepageMN.historyTitle : homepageEN.historyTitle}
            </FONT>
          </View>
          <View style={[styles.history, { width: width * 0.49 }]}>
            <FONT type="Body" style={{ textAlign: 'center', fontSize: 16, lineHeight: width * 0.02 }}>
              {isTranslated ? homepageMN.historyBodyText : homepageEN.historyBodyText}
            </FONT>
          </View>
        </View>
        <OverlayImage
          image={{ uri: isTranslated ? homepageMN.historyImage : homepageEN.historyImage }}
          style={{ width: width * 0.25, height: width * 0.21, borderRadius: width * 0.037, marginLeft: width * 0.03 }}
        />
      </View>

      <View style={{ backgroundColor: '#3d2562', width: '100%', height: width * 0.05, marginTop: width * 0.1 }} />

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: "row", marginTop: '5%' }}>
          <Image source={{ uri: isTranslated ? homepageMN.undergradImage : homepageEN.undergradImage }} style={{ width: width * 0.38, height: width * 0.25 }} resizeMode="contain" />
          <View style={{ marginLeft: width * 0.02 }}>
            <FONT style={{ fontSize: 20 }}>UNDERGRADUATE MAJORS</FONT>
            <FONT style={{ fontSize: 18, width: width * 0.3, marginTop: width * 0.008, letterSpacing: width * 0.0016 }}>
              {isTranslated ? homepageMN.undergradDescription : homepageEN.undergradDescription}
            </FONT>
            <FONT type="Title3" style={{ fontSize: 18, marginTop: width * 0.012 }}>85% employed within months of graduation</FONT>
            <Button type="Ten" text={"Explore Undergraduate Programs"} style={{ marginTop: width * 0.012 }} onPress={() => navigation.navigate('Graduate')} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: '5%' }}>
          <View style={{ marginRight: width * 0.03 }}>
            <FONT style={{ fontSize: 20 }}>GRADUATE MAJORS</FONT>
            <FONT style={{ fontSize: 18, width: width * 0.3, marginTop: width * 0.008, letterSpacing: width * 0.0016 }}>
              {isTranslated ? homepageMN.graduateDescription : homepageEN.graduateDescription}
            </FONT>
            <FONT type="Title3" style={{ fontSize: 18, marginTop: width * 0.012 }}>345+ MIU student studies abroad</FONT>
            <Button type="Ten" text={"Explore Graduate Programs"} style={{ marginTop: width * 0.012 }} onPress={() => navigation.navigate('Graduate')} />
          </View>
          <Image source={{ uri: isTranslated ? homepageMN.graduateImage : homepageEN.graduateImage }} style={{ width: width * 0.38, height: width * 0.25 }} resizeMode="contain" />
        </View>
      </View>

      <View style={[styles.reasons, { height: width * 0.18, borderTopLeftRadius: width * 0.037, borderTopRightRadius: width * 0.037 }]}>
        <View style={{ width: width * 0.16 }}>
          <FONT style={{ fontSize: 40, borderBottomWidth: width * 0.0008, textAlign: 'center', borderColor: "#3d2562" }}>{isTranslated ? homepageMN.FourReasonsTitle1 : homepageEN.FourReasonsTitle1}</FONT>
          <FONT style={{ fontSize: 40, textAlign: 'center' }}>{isTranslated ? homepageMN.FourReasonsTitle2 : homepageEN.FourReasonsTitle2}</FONT>
        </View>
        <View style={{ borderRightWidth: width * 0.0008, borderColor: "#3d2562", marginLeft: width * 0.02, height: width * 0.11, marginRight: width * 0.05 }} />
        <View>
          <FONT style={{ fontSize: 25 }}>{isTranslated ? homepageMN.FourReasonsReason1 : homepageEN.FourReasonsReason1}</FONT>
          <FONT style={{ fontSize: 25, marginTop: width * 0.005 }}>{isTranslated ? homepageMN.FourReasonsReason2 : homepageEN.FourReasonsReason2}</FONT>
          <FONT style={{ fontSize: 25, marginTop: width * 0.005 }}>{isTranslated ? homepageMN.FourReasonsReason3 : homepageEN.FourReasonsReason3}</FONT>
          <FONT style={{ fontSize: 25, marginTop: width * 0.005 }}>{isTranslated ? homepageMN.FourReasonsReason4 : homepageEN.FourReasonsReason4}</FONT>
        </View>
      </View>

      <MapComponent navigate={() => navigation.navigate('Dorm')} />

      <View style={[styles.apply, { height: width * 0.4, marginTop: '2%' }]}>
        <FONT type="Title" style={{ color: "#fff", fontSize: 86 }}>APPLY NOW</FONT>
        <View style={{ marginTop: '1%', marginBottom: '2%', width: width * 0.38 }}>
          <FONT type="Title2" style={{ color: "#fff", textAlign: 'center', fontSize: 25 }}>
            {isTranslated ? homepageMN.ApplyText : homepageEN.ApplyText}
          </FONT>
        </View>
        <Button type="Apply" text={isTranslated ? homepageMN.ApplyButton : homepageEN.ApplyButton} onPress={() => Linking.openURL(apply)}></Button>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF",
  },
  image: {
    width: "100%",
  },
  history: {
    alignSelf: 'flex-start',
  },
  apply: {
    width: '100%',
    backgroundColor: '#FCB900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reasons: {
    backgroundColor: "#EDF0FF",
    width: '100%',
    shadowColor: '#DFE4FF',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
