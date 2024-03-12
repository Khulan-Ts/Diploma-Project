import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, Animated } from "react-native";
import Header from "./src/components/Header";

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
