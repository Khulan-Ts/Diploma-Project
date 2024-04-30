import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const ExpandableListItem = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpansion = () => {
    const toValue = expanded ? 0 : 1;
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setExpanded(!expanded);
  };

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100], // Change 100 to whatever height you want to expand to
  });

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={toggleExpansion}>
        <Text>{title}</Text>
      </TouchableOpacity>
      <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
        <Text>{content}</Text>
      </Animated.View>
    </View>
  );
};

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <ExpandableListItem title="Item 1" content="Content for item 1" />
      <ExpandableListItem title="Item 2" content="Content for item 2" />
      {/* Add more ExpandableListItem components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 35,
    backgroundColor: '#EDF0FF',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 32,
    paddingTop: 32,
    position:'relative'
},
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#EDF0FF',
  },
});

export default AboutUs;
