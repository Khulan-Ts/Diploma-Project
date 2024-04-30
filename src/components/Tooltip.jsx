import React from 'react';
import { View, StyleSheet, Pressable, useWindowDimensions, useWindowDimensions } from 'react-native';
import FONT from './Titles';

export const ToolTip = ({
  text,
  type,
  children,
  onPress,
  onBlur,
  onFocus,
  lines,
  style
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const { width, height } = useWindowDimensions();
  
  const CommonTooltipStyle = [
    styles.commonTooltip,
    type === 'Undergraduate' && {backgroundColor: "rgba(237, 240, 255, 0.5)"} 
  ];

  const handleHoverIn = () => {
    setShowTooltip(true);
  };

  const handleHoverOut = () => {
    setShowTooltip(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onFocus={onFocus}
      onBlur={onBlur}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      {children}
      {showTooltip && (
        <View style={[CommonTooltipStyle]}>
          <FONT type="Regular" style={[{ fontSize: 18 }, style]} lines={lines}>
            {text}
          </FONT>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  commonTooltip: {
    borderRadius: 10,
    backgroundColor: 'rgba(255, 219, 120, 0.5)',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignSelf: 'flex-start',
  },
  tooltipTop: {
    position: 'absolute',
    bottom: '100%',
    marginBottom: 5,
    alignSelf: 'center',
  },
  tooltipBottom: {
    position: 'absolute',
    top: '100%',
    marginTop: 5,
    alignSelf: 'center',
  },
  tooltipLeft: {
    position: 'absolute',
    right: '100%',
    marginRight: 5,
    alignSelf: 'center',
  },
  tooltipRight: {
    position: 'absolute',
    left: '100%',
    marginLeft: 5,
    alignSelf: 'center',
  },
});

export default ToolTip;
