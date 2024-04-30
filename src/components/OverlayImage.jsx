import * as React from "react";
import { View, StyleSheet, Image } from "react-native";

export const OverlayImage = ({ image, style }) => {
    const overlayBackground = [
        styles.overlay,
        style
    ];

    return (
        <View>
            <Image
              source={image}
              style={style}
            />
            <View style={overlayBackground} />
        </View>
    );
};

export default OverlayImage;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(61, 37, 98, 0.6)",
    zIndex: 1,
  },
});
