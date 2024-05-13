import React, { useState } from 'react';
import { View, Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import FONT from './Titles';

export const Dropdown = ({
  text,
  children,
  onPress,
  onBlur,
  onFocus,
  style,
  preferredSide = 'bottom', // Default side for the dropdown to appear
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowDimensions();

  const CommonDropdownStyle = [
    styles.commonDropdown,
    preferredSide === 'top' && styles.dropdownTop,
    preferredSide === 'bottom' && styles.dropdownBottom,
    preferredSide === 'left' && styles.dropdownLeft,
    preferredSide === 'right' && styles.dropdownRight,
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Pressable
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
      onLongPress={toggleDropdown}
    >
      {children}
      {isOpen && (
        <View style={CommonDropdownStyle}>
          <FONT type="Regular" style={[{ fontSize: 18 }, style]}>
            {text}
          </FONT>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  commonDropdown: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 219, 120, 0.5)',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  dropdownTop: {
    position: 'absolute',
    bottom: '100%',
    marginBottom: 5,
    alignSelf: 'center',
  },
  dropdownBottom: {
    position: 'absolute',
    top: '100%',
    marginTop: 5,
    alignSelf: 'center',
  },
  dropdownLeft: {
    position: 'absolute',
    right: '100%',
    marginRight: 5,
    alignSelf: 'center',
  },
  dropdownRight: {
    position: 'absolute',
    left: '100%',
    marginLeft: 5,
    alignSelf: 'center',
  },
});

export default Dropdown;
