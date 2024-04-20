
import React from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';
const AnotherScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
          source={require("./assets/images/overlay_ellipse.png")}
          style={[styles.image, { height: '37.4%', position: 'absolute', marginTop: '-12.4%', zIndex: 5 }]}
          resizeMode="contain"
        />
        <Image
          source={require("./assets/images/homepage-2.png")}
          style={[styles.image, { height: "30%" }]}
        />
    </View>
  );
};

export default AnotherScreen;
