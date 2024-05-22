import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, useWindowDimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FONT from '../../src/components/Titles';

export const ExpandableList = ({ title, content, maxHeightPercentage }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [arrowRotation] = useState(new Animated.Value(0));
  const contentContainerHeight = useRef(0);
  const { width, height } = useWindowDimensions();

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
    Animated.timing(arrowRotation, {
      toValue: expanded ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const arrowRotate = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleOnLayout = (event) => {
    contentContainerHeight.current = event.nativeEvent.layout.height * maxHeightPercentage / 100;
  };

  return (
    <View style={[styles.itemContainer, {width:width*0.74, marginBottom:width*0.005}]}>
      <TouchableOpacity onPress={toggleExpansion} activeOpacity={1} style={[styles.titleContainer, {padding: width*0.015}]}>
        <FONT type='Subtitle2' style={{ fontWeight: 'bold', flex: 1, fontSize:25}}>{title}</FONT>
        <Animated.View style={{ transform: [{ rotate: arrowRotate }] }}>
          <FontAwesome name="angle-down" size={width * 0.025} color="#3d2562" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={{ height: animation, overflow: 'hidden' }}>
        <View style={{paddingLeft: width*0.014, paddingRight: width*0.014, paddingBottom:width*0.007,position: 'relative'}} onLayout={handleOnLayout}>
          <FONT type='Body' style={{fontSize:18}}>{content}</FONT>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 35,
    backgroundColor: '#EDF0FF',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

});

export default ExpandableList;
