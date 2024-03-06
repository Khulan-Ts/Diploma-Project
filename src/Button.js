import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';

const Button = ({
  type,
  text,
  onPress,
  onHoverIn,
  onHoverOut,
  style
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const ButtonStyles = [
    styles.common,
    type === 'Secondary' && { borderWidth: 0 },
    isHovered && { backgroundColor: '#3d3562' },
    style
  ];

  const TextStyle = [
    { color: isHovered ? '#fff' : '#3d2562' }
  ];

  return (
    <Pressable
      onPress={onPress}
      onMouseEnter={() => {
        onHoverIn?.();
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        onHoverOut?.();
        setIsHovered(false);
      }}>
      <View style={ButtonStyles}>
        <Text numberOfLines={1} style={TextStyle}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  common: {
    borderColor: '#3d2562',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start'
  }
});
