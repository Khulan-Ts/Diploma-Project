import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import FONT from './Titles';

export const ToolTip = ({
  text,
  lines,
  children,
  onPress,
  onBlur,
  onFocus,
  style
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const CommonTooltipSyle = [
    styles.commonTooltip,
    style
  ];

  const handleHoverIn = () => {
    setShowTooltip(true);
  };

  const handleHoverOut = () => {
    setShowTooltip(false);
  };

  const clonedChild = React.cloneElement(children, {
    onHoverIn: handleHoverIn,
    onHoverOut: handleHoverOut,
  });

  return (
    <Pressable
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {clonedChild}
      {showTooltip && (
        <View style={CommonTooltipSyle}>
          <FONT type="Regular" style={{ fontSize: 18 }} lines={lines}>
            {text}
          </FONT>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  commonTooltip: {
    position: 'absolute',
    top: '100%',
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 219, 120, 0.5)',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default ToolTip;
