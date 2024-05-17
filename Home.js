import React from "react";
import { StyleSheet, Image, View, ScrollView, useWindowDimensions, Linking } from "react-native";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import OverlayImage from "./src/components/OverlayImage";
import HoverButton from "./src/components/hoverButtons";
import Footer from "./src/components/footer";
import data from "./static.json";
import mn from "./staticMN.json";
import ru from "./staticRU.json";

const HomeScreen = ({ navigation, language }) => {
  const { width } = useWindowDimensions();
  const { apply } = data.links;
  const homepageImg = data.hompageImg;
  const homepageEN = data.homepageEN;
  const homepageMN = mn.homepageMN;
  const homepageRU = ru.homepageRU;

  let content;
  switch (language){
    case 'mn':
      content = homepageMN;
      break;
    case 'ru':
      content = homepageRU;
      break;
    case 'en':
      content = homepageEN;
      break;
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        source={require("./assets/images/overlay_ellipse.png")}
        style={[styles.image, { height: width * 0.6, position: 'absolute', marginTop: '-0.1%', zIndex: 2 }]}
      />
      <Image
        source={{ uri: homepageImg.welcomeImage }}
        style={[styles.image, { height: width * 0.6 }]}
      />

      <View style={{ position: 'absolute', alignItems: 'center', zIndex: 6, alignSelf: 'center', marginTop: '18%' }}>
        <FONT style={{ fontSize: 36, color: '#fff', textAlign: 'center' }}>
          {content.title1}
        </FONT>
        <FONT type="Title3" style={{ width: width * 0.6, fontSize: 72, lineHeight: width * 0.059, textAlign: 'center', color: '#fff', zIndex: 6 }}>
          {content.title2}
        </FONT>
      </View>

      <View style={{ alignItems: 'center', marginTop: '-10%', zIndex: 3 }}>
        <View style={{ flexDirection: 'row' }}>
          <HoverButton icon={require("./assets/icons/teachers.png")} text={content.hoverText1} number={content.hoverNum1}></HoverButton>
          <HoverButton icon={require("./assets/icons/research.png")} text={content.hoverText2} number={content.hoverNum2} style={{ marginLeft: width * 0.03 }}></HoverButton>
          <HoverButton icon={require("./assets/icons/department.png")} text={content.hoverText3} number={content.hoverNum3} style={{ marginLeft: width * 0.03 }}></HoverButton>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: width * 0.05 }}>
        
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={[styles.history, { width: width * 0.49, marginBottom: width * 0.002 }]}>
            <FONT type="Title3" style={{ textAlign: 'center', fontSize: 36 }}>
              {content.historyTitle}
            </FONT>
          </View>
          <View style={[styles.history, { width: width * 0.49 }]}>
            <FONT type="Body" style={{ textAlign: 'center', fontSize: 16, lineHeight: width * 0.02 }}>
              {content.historyBodyText}
            </FONT>
          </View>
        </View>
        <OverlayImage
          image={{ uri: homepageImg.historyImage }}
          style={{ width: width * 0.25, height: width * 0.21, borderRadius: width * 0.037, marginLeft: width * 0.03 }}
        />
      </View>

      <View style={{ backgroundColor: '#3d2562', width: '100%', height: width * 0.05, marginTop: width * 0.1 }} />

      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: "row", marginTop: '5%' }}>
          <Image source={{ uri: homepageImg.undergradImage }} style={{ width: width * 0.38, height: width * 0.25 }} resizeMode="contain" />
          <View style={{ marginLeft: width * 0.02 }}>
            <FONT style={{ fontSize: 20 }}>{content.undergradTitle}</FONT>
            <FONT style={{ fontSize: 18, width: width * 0.3, marginTop: width * 0.008, letterSpacing: width * 0.0016 }}>
              {content.undergradDescription}
            </FONT>
            <FONT type="Title3" style={{ fontSize: 18, marginTop: width * 0.012 }}>{content.undergradFact}</FONT>
            <Button type="Ten" text={content.undergradButton} style={{ marginTop: width * 0.012 }} onPress={() => navigation.navigate('Graduate')} />
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: '5%' }}>
          <View style={{ marginRight: width * 0.03 }}>
            <FONT style={{ fontSize: 20 }}>{content.graduateTitle}</FONT>
            <FONT style={{ fontSize: 18, width: width * 0.3, marginTop: width * 0.008, letterSpacing: width * 0.0016 }}>
              {content.graduateDescription}
            </FONT>
            <FONT type="Title3" style={{ fontSize: 18, marginTop: width * 0.012 }}>{content.graduateFact}</FONT>
            <Button type="Ten" text={content.graduateButton} style={{ marginTop: width * 0.012 }} onPress={() => navigation.navigate('Graduate')} />
          </View>
          <Image source={{ uri: homepageImg.graduateImage }} style={{ width: width * 0.38, height: width * 0.25 }} resizeMode="contain" />
        </View>
      </View>

      <View style={[styles.reasons, { height: width * 0.18, borderTopLeftRadius: width * 0.037, borderTopRightRadius: width * 0.037 }]}>
        <View style={{ width: width * 0.16 }}>
          <FONT style={{ fontSize: 40, borderBottomWidth: width * 0.0008, textAlign: 'center', borderColor: "#3d2562" }}>{content.FourReasonsTitle1}</FONT>
          <FONT style={{ fontSize: 40, textAlign: 'center' }}>{content.FourReasonsTitle2}</FONT>
        </View>
        <View style={{ borderRightWidth: width * 0.0008, borderColor: "#3d2562", marginLeft: width * 0.02, height: width * 0.11, marginRight: width * 0.05 }} />
        <View>
          <FONT style={{ fontSize: 25 }}>{content.FourReasonsReason1}</FONT>
          <FONT style={{ fontSize: 25, marginTop: width * 0.005 }}>{content.FourReasonsReason2}</FONT>
          <FONT style={{ fontSize: 25, marginTop: width * 0.005 }}>{content.FourReasonsReason3}</FONT>
          <FONT style={{ fontSize: 25, marginTop: width * 0.005 }}>{content.FourReasonsReason4}</FONT>
        </View>
      </View>

      <MapComponent navigate={() => navigation.navigate('Dorm')} />

      <View style={[styles.apply, { height: width * 0.4, marginTop: '2%' }]}>
        <FONT type="Title" style={{ color: "#fff", fontSize: 86 }}>{content.ApplyNow}</FONT>
        <View style={{ marginTop: '1%', marginBottom: '2%', width: width * 0.38 }}>
          <FONT type="Title2" style={{ color: "#fff", textAlign: 'center', fontSize: 25 }}>
            {content.ApplyText}
          </FONT>
        </View>
        <Button type="Apply" text={content.ApplyButton} onPress={() => Linking.openURL(apply)}></Button>
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
