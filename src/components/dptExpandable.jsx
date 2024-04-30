import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FONT from '../../src/components/Titles';

export const expandableList = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [arrowRotation] = useState(new Animated.Value(0));

  const toggleExpansion = () => {
    const toValue = expanded ? 0 : 1;
    Animated.parallel([ 
      Animated.timing(animation, {
        toValue,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(arrowRotation, {
        toValue: toValue ? 1 : 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    setExpanded(!expanded);
  };

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const arrowRotate = arrowRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpansion} style={styles.titleContainer}>
        <FONT type='Subtitle2' style={{ fontWeight: 'bold', flex: 1 }}>{title}</FONT>
        <Animated.View style={{ transform: [{ rotate: arrowRotate }] }}>
          <FontAwesome name="angle-down" size={35} color="#3d2562" />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
        <FONT type='Body'>{content}</FONT>
      </Animated.View>
    </View>
  );
};

// const MBA = () => {
//   return (
//     <View style={styles.expandable}>
//       <ExpandableListItem title="Admission Requirements" content="text" />
//       <ExpandableListItem title="Curriculum" content="Content for item 2" />
//     </View>
//   );
// };

const styles = StyleSheet.create({

  expandable: {
    backgroundColor: '#F6FAFF',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 32,
    paddingTop: 32,
    position: 'relative'
  },
  itemContainer: {
    marginBottom: 10,
    borderRadius: 35,
    padding: 25,
    backgroundColor: '#EDF0FF',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default expandableList;
