import React, { useState } from "react";
import { StyleSheet, Text, Image, Animated, View } from "react-native";
import Header from "./src/components/Header";
import Title from "./src/components/Titles";
import Button from "./src/components/Button";

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
      <View style={{marginLeft: 203, width:136, height:35}}>
       
        <View style={{marginTop: 159,borderBottomWidth: 1, width: 210, paddingBottom: 14,paddingLeft:14}}>
        <Title type="Subtitle" text={'Undergraduate'} style={{color: '#62253E'}}></Title>
        </View>
        <Button type="Secondary" text={"Undergraduate"}></Button>
        <Button type="Secondary" text={"Graduate"}></Button>
        <Button type="Secondary" text={"2+2 program"}></Button>
        <Button type="Secondary" text={"Exchange student Program"}></Button>
        <Button type="Secondary" text={"Vision Trip"}></Button>
        <Button type="Secondary" text={"Academic Calendar"}></Button>
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
});