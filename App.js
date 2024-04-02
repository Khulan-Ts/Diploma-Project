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
      <View style={{marginLeft: 203}}>
       
        <View style={{marginTop: 159,borderBottomWidth: 1, width: 210, paddingBottom: 14,paddingLeft:14}}>
          <Title type="Regular" text={'Academics'} style={{color: '#000000'}}></Title>
        </View>
        <Button type="Secondary" text={"Undergraduate"}></Button>
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
