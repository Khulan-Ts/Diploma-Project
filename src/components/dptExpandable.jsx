import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FONT from '../../src/components/Titles';

const { height: screenHeight } = Dimensions.get('window');

export const ExpandableList = ({ title, content, maxHeightPercentage, style }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [arrowRotation] = useState(new Animated.Value(0));
  const contentContainerHeight = useRef(0);

  useEffect(() => {
    if (expanded) {
      Animated.timing(animation, {
        toValue: contentContainerHeight.current,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  }, [expanded]);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const arrowRotate = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleOnLayout = (event) => {
    contentContainerHeight.current = event.nativeEvent.layout.height * maxHeightPercentage / 100;
  };

  return (
    <View style={[styles.itemContainer, style]}>
      <TouchableOpacity onPress={toggleExpansion} style={styles.titleContainer}>
        <FONT type='Subtitle2' style={{ fontWeight: 'bold', flex: 1 ,fontSize: 22}}>{title}</FONT>
        <Animated.View style={{ transform: [{ rotate: arrowRotate }] }}>
          <FontAwesome name="angle-down" size={35} color="#3d2562" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={{ height: animation, overflow: 'hidden' }}>
        <View style={styles.contentContainer} onLayout={handleOnLayout}>
          <FONT type='Body' style={{fontSize: 18}}>{content}</FONT>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width:'75%',
    marginBottom: 10,
    borderRadius: 35,
    backgroundColor: '#EDF0FF',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative',
  },
  orangeLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'orange',
    width: '75%'
  },
});

export default ExpandableList;
