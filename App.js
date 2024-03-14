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
      <View style={{marginTop: 40}}>
          <FONT type="Subtitle"style={{color: '#62253E'}}>Undergraduate</FONT>
        </View>
      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: "center", flexDirection: "row", marginTop: 40}}>
          <CardButton image={require("./assets/cs.png")} text={'Computer Science'}/>
          <CardButton image={require("./assets/image.png")} text={'Software Engineering'}/>
          <CardButton image={require("./assets/cs.png")} text={'Fashion Design'}/>
          <CardButton image={require("./assets/image.png")} text={'International Relations'}/>
        </View>
        </View>
        <View style={{marginTop: 40, marginLeft: 140}}>
          <FONT type="Subtitle" style={{color: '#62253E'}}>Graduate</FONT>
        </View>
        <View style={{alignItems: 'center'}}>
        <View style={{alignItems: "center", flexDirection: "row", marginTop: 40}}>
          <CardButton type={'Secondary'} image={require("./assets/cs.png")} text={'Computer Science'}/>
          <CardButton type={'Secondary'} image={require("./assets/image.png")} text={'Software Engineering'}/>
          <CardButton type={'Secondary'} image={require("./assets/cs.png")} text={'Fashion Design'}/>
          <CardButton type={'Secondary'} image={require("./assets/image.png")} text={'International Relations'}/>
        </View>
      </View>
      <View style={{marginTop: 40, alignItems: 'center'}}>
          <FONT type="Title" >Our History</FONT>
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
    elevation: 3, // Required for Android
    // Other header styles such as height, padding, etc.
  },
  image: {
    width: "100%",
    height: 1024,
  },
});
