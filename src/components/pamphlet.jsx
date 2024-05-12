import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, useWindowDimensions } from 'react-native';



const images = [
  require('../../assets/images/plan_pamphlet/1.png'),
  require('../../assets/images/plan_pamphlet/2.png'),
  require('../../assets/images/plan_pamphlet/3.png'),
  require('../../assets/images/plan_pamphlet/4.png'),
  require('../../assets/images/plan_pamphlet/5.png'),
  require('../../assets/images/plan_pamphlet/6.png'),
  require('../../assets/images/plan_pamphlet/7.png'),
  require('../../assets/images/plan_pamphlet/8.png'),
  require('../../assets/images/plan_pamphlet/9.png'),
  require('../../assets/images/plan_pamphlet/10.png'),
];

const Pamphlet = () => {
  const [index, setIndex] = useState(0);
  const position = new Animated.Value(0);
  const { width, height } = useWindowDimensions();

  const handlePressRight = () => {
    Animated.timing(position, {
      toValue: -1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      position.setValue(0);
    });
  };

  const handlePressLeft = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      position.setValue(0);
    });
  };

  const imageWidth = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, width * 0.6, 0],
  });

  return (
    <View style={styles.container}>
      {images.map((image, i) => (
        <Animated.View
          key={i}
          style={[
            styles.imageContainer,
            {
              zIndex: images.length - i,
              transform: [
                {
                  translateX: i === index ? position : new Animated.Value(width),
                },
              ],
              width: width,
            },
          ]}
        >
          
          <Animated.Image source={image} style={[{height: width * 0.425, width: imageWidth }]}/>
          {i === index && (
            <TouchableOpacity
              style={{position: 'absolute', width: width * 0.3, height: width * 0.425, marginLeft: width * 0.3}}
              onPress={handlePressRight}
            />
          )}
          {index !== 0 && (
           <TouchableOpacity
          style={[styles.navigationButton,{ width: width * 0.3, height: width * 0.425,}]}
          onPress={handlePressLeft}
          />
          )}
          
        </Animated.View>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute', 
  },
  navigationButton: {
    position: 'absolute',
    left: 0,
  },
});

export default Pamphlet;