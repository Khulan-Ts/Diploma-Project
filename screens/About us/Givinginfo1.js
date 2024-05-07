import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const Givinginfo1 = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{ flexDirection: "row", marginTop: width * 0.05 }}>
        <View style={{ width: width * 0.1, marginTop: '-2%', marginRight: 'auto' }}>
          <Image source={require('../../assets/images/calligraphy/givingcal.png')} style={{ width: 'auto', height: width * 0.3 }} resizeMode="contain" />
        </View>
        <View style={{ width: '18%', marginLeft: '1%' }}>
          <View style={{ marginTop: '5%' }}>
            <View style={{ borderBottomWidth: 1, width: '70%' }}>
              <Button type="Secondary" text={"About us"}></Button>
            </View>
            <View style={{ borderBottomWidth: 1, width: '70%' }}>
              <Button type="Secondary" text={"Our people"} onPress={() => navigation.navigate('Our people')}></Button>
            </View>
            <View style={{ borderBottomWidth: 1, width: '70%' }}>
              <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('Plan and Report')}></Button>
            </View>
            <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Givinginfo1')}isPressedState={true}></Button>
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ width: width * 0.6, height: width * 0.12, marginTop: 20, backgroundColor: '#EDF0FF', padding: width * 0.01 }}>
            <FONT type='Title2' style={{ color: '#3D2562', fontSize: 23 }}>
              Please Consider Making a Gift to the Annual Fund
            </FONT>
            <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}>Your support now, with a donation of any amount, is vital to ensure we have the resources to continue to honor our vision to be the preeminent intellectual and creative center for effective engagement in a world that increasingly demands better-designed objects, communication, systems, and organizations to meet social needs.</FONT>
          </View>
        </View>
        <View style={{ width: width * 0.78, height: width * 0.16, marginTop: width * 0.15, marginLeft: width * 0.11, position: 'absolute' }}>
          <FONT type='Title2' style={{ color: '#3D2562', fontSize: 20 }}>
            Support Our School
          </FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> • Improving Learning and Teaching environment</FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> • Encouraging Student and Faculty research programs</FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> </FONT>

          <FONT type='Title2' style={{ color: '#3D2562', fontSize: 20 }}> Supporting Students' Well-being </FONT>
          <FONT style={{ marginTop: width * 0.005, color: '#3D2562', fontSize: 18 }}> At a time of great crisis, dislocation, and financial strain, we must redouble our longstanding investment in support and resources to ensure that every student can thrive. Our strength as an institution is inextricably linked to the strength of our students—and your gift to support the following programs is the single most direct way you can invest in. </FONT>
          <View style={{ width: width * 0.26, marginLeft: '0%' }}>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: "9%", padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}>
                  South Korea – Bank Account Information:
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: "9%", padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}> </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: -2, padding: width * 0.01 }}>
                <FONT type={"Body"} style={{ fontSize: 13}}>
                  BANK ACCOUNT INFORMATION : (REPUBLIC OF KOREA)
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: -2, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13}}>
                  계좌명:  사단법인 실크로드희망교육개발연대
                </FONT>
                <FONT type={"Body"}style={{ fontSize: 13}}>
                  계좌은행 및 번호:                                    하나은행 / 588-910018-82804
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.01, padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}>
                  Mongolia – Bank Account Information:
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.01, padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                <FONT type={"Title3"} style={{ fontSize: 15 }}> </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Beneficiary’s Name:
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Эм Ай Ю дээд сургууль
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Beneficiary’s Bank:
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Khan Bank
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Beneficiary’s Account /MNT/
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  5720485207
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Bank SWIFT Code:
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  AGMOMNUB
                </FONT>
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Bank Address:
                </FONT>
              </View>
              <View style={{ width: width * 0.39, borderWidth: width * 0.0008, borderColor: '#CDD4FB', marginTop: width * 0.00001, padding: width * 0.01 }}>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Khan Bank Tower, Chinggis Avenue-6, Stadium Orgil-1, Khan-Uul District,
                </FONT>
                <FONT type={"Body"}style={{ fontSize: 13 }}>
                  Ulaanbaatar 17010, Mongolia
                </FONT>
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: width * 0.1, marginTop: '-2%', marginLeft: 'auto' }}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{ width: 'auto', height: width * 0.5, marginBottom: width * 0.19 }} resizeMode="contain" />
        </View>
      </View>
      <Footer/>
    </ScrollView>

  );
}

export default Givinginfo1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
