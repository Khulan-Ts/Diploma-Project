import React, { useState } from "react";
import { StyleSheet, Text, Image, Animated, View } from "react-native";
import Header from "./src/components/Header";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";

export default function App() {
  const [scrollY] = useState(new Animated.Value(0));

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: ["rgba(61, 37, 98, 1)", "rgba(61, 37, 98, 0.5)"],
    extrapolate: "clamp",
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    >
        <Header
          type={"Primary"}
          buttontext={["about us", "academics", "admissions", "LEI"]}
          style ={{backgroundColor: headerBackgroundColor }}
        />
      <Image
        source={require("./assets/homepage-1.png")}
        style={styles.image}
      />
      
      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: 75}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Undergraduate</FONT>
            <CardButton image={require("./assets/cs.png")} text={'Computer Science'} style={{marginTop: 17}}/>
          </View>
          <CardButton image={require("./assets/se.png")} text={'Software Engineering'} style={{marginTop: 52}}/>
          <CardButton image={require("./assets/cs.png")} text={'Fashion Design'} style={{marginTop: 52}}/>
          <CardButton image={require("./assets/se.png")} text={'International Relations'} style={{marginTop: 52}}/>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: 27}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Graduate</FONT>
            <CardButton image={require("./assets/cs.png")} text={'Computer Science'} style={{marginTop: 17}}/>
          </View>
          <CardButton type={"Secondary"} image={require("./assets/se.png")} text={'Software Engineering'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/cs.png")} text={'Fashion Design'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/se.png")} text={'International Relations'} style={{marginTop: 51}}/>
        </View>
      </View>
      <View style={{marginTop: 137, alignItems: 'center'}}>
        <FONT type="Title" >Our History</FONT>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require("./assets/homepage-1.png")}
          style={styles.historyImg}
        />
      <View style={styles.history}> 
        <FONT type="Body">
          MIU was established in 2002 as a private university located in Ulaanbaatar, Mongolia.
          With great contribution from the former president of Mongolia, Mr. Natsagiin Bagabandi, MIU received free
          land of 17,100 ㎡ on which the first building was built. MIU distinguished itself as a prominent university
          providing English-Speaking higher education in Central Asia. MIU currently offers 14 recognized bachelor’s
          programs and is committed to providing a world-class education to tomorrow’s global servant leaders from Mongolia,
        Russia, China, Republic of Korea, and other nations.
        </FONT>
      </View>
    </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: 1024,
  },
  historyImg:{
    width: 705,
    height: 393,
    borderRadius: 10,
    marginTop: 31,
    marginLeft: 63
  },
  history:{
    backgroundColor: '#EDF0FF',
    borderRadius: 10,
    maxWidth: 680,
    padding: 20,
    flex: 1,
    marginLeft: -120,
    marginTop: 110, 
    alignSelf: 'flex-start'
  }
});
