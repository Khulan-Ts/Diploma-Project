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
          <CardButton image={require("./assets/image.png")} text={'Software Engineering'} style={{marginTop: 52}}/>
          <CardButton image={require("./assets/cs.png")} text={'Fashion Design'} style={{marginTop: 52}}/>
          <CardButton image={require("./assets/image.png")} text={'International Relations'} style={{marginTop: 52}}/>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: 27}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Graduate</FONT>
            <CardButton image={require("./assets/cs.png")} text={'Computer Science'} style={{marginTop: 17}}/>
          </View>
          <CardButton type={"Secondary"} image={require("./assets/image.png")} text={'Software Engineering'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/cs.png")} text={'Fashion Design'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/image.png")} text={'International Relations'} style={{marginTop: 51}}/>
        </View>
      </View>
      <View style={{marginTop: 137, alignItems: 'center'}}>
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
