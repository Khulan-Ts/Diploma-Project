import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const GivingInfo = ({ navigation, language }) => {
  const { width, height } = useWindowDimensions();
  const givingInfoEN = data.givingInfoEN;
  const givingInfoMN = mn.givingInfoMN;
  const givingInfoRU = ru.givingInfoRU;

  let content;
    switch (language){
    case 'mn':
      content = givingInfoMN;
      break;
    case 'ru':
      content = givingInfoRU;
      break;
    case 'en':
      content = givingInfoEN;
      break;
  }
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{ flexDirection: "row", marginTop: width * 0.05 }}>
        <View style={{ width: width * 0.1, marginTop: '-2%', marginRight: 'auto' }}>
          <Image source={require('../../assets/images/calligraphy/givingcal.png')} style={{ width: 'auto', height: width * 0.3 }} resizeMode="contain" />
        </View>
        <View style={{ width: '18%' }}>
              <View style={{ borderBottomWidth: width * 0.0008, width: '80%', paddingBottom: width * 0.01, paddingLeft: width * 0.007}}>
                <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>{content.AboutUsTitle}</FONT>
              </View>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                      <Button type="Secondary" text={content.AboutUsButton1} onPress={() => navigation.navigate('About us')}></Button>
                  </View>
                  <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                      <Button type="Secondary" text={content.AboutUsButton2} onPress={() => navigation.navigate('Our people')}></Button>
                  </View>
                      <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={content.AboutUsButton3} onPress={() => navigation.navigate('Plan and Report')}></Button> 
                  </View>
                  <Button type="Secondary" text={content.AboutUsButton4} onPress={() => navigation.navigate('Giving Information')} isPressedState={true}></Button>
              </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ width: width * 0.6, height: width * 0.12, marginTop: 20, backgroundColor: '#EDF0FF', padding: width * 0.01 }}>
            <FONT type='Title2' style={{ color: '#3D2562', fontSize: 23 }}>
              {content.FundTitle}
            </FONT>
            <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}>{content.FundDescription}</FONT>
          </View>
        </View>
        <View style={{ width: width * 0.78, height: width * 0.16, marginTop: width * 0.17, marginLeft: width * 0.11, position: 'absolute' }}>
          <FONT type='Title2' style={{ color: '#3D2562', fontSize: 20 }}>
            {content.SupportTitle}
          </FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> {content.Support1}</FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> {content.Support2}</FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> </FONT>

          <FONT type='Title2' style={{ color: '#3D2562', fontSize: 20 }}> {content.SupportStudentTitle} </FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}>{content.SupportStudent}</FONT>
          <View style={{ width: width * 0.26, marginLeft: '0%' }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: "9%", padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}>
                  {content.SKBankTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: "9%", padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}> </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: -2, padding: width * 0.01 }}>
                <FONT type={"Body"} style={{ fontSize: 13}}>
                  {content.SKBankInfo1}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: -2, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13}}>
                {content.SKBankInfo2}
                </FONT>
                <FONT type={"Body"}style={{ fontSize: 13}}>
                {content.SKBankInfo3}
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.01, padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}>
                {content.MNBankTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.01, padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}> </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBeneNameTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBeneName}
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBeneBankTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBeneBank}
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBeneAccountTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBeneAccount}
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNSwiftCodeTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNSwiftCode}
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBankAddressTitle}
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBankAddress1}
                </FONT>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                {content.MNBankAddress2}
                </FONT>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: width * 0.1, marginTop: '-2%', marginLeft: 'auto' }}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{ width: 'auto', height: width * 0.5, marginBottom: width * 0.2 }} resizeMode="contain" />
        </View>
      </View>
      <Footer/>
    </ScrollView>

  );
}

export default GivingInfo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
