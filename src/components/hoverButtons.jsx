import React from 'react';
import { View, StyleSheet, Pressable, Image, useWindowDimensions, Animated } from 'react-native';
import FONT from './Titles';

export const HoverButton = ({
    type,
    text,
    icon,
    nummber,
    style
}) => {
    const { width, height } = useWindowDimensions();

    const [isHovered, setIsHovered] = React.useState(false);
    const iconOpacity = React.useRef(new Animated.Value(1)).current;
    const textScale = React.useRef(new Animated.Value(1)).current;

    const handleHoverIn = () => {
        setIsHovered(true);
        Animated.parallel([
            Animated.timing(iconOpacity, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(textScale, {
                toValue: 1.2,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
    };

    const handleHoverOut = () => {
        setIsHovered(false);
        Animated.parallel([
            Animated.timing(iconOpacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }),
            Animated.timing(textScale, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            })
        ]).start();
    };

    const ContainerStyles = [
        styles.container,{ 
            width: width * 0.22,
            height: width * 0.2,
            paddingLeft: width * 0.018, 
            paddingRight: width * 0.018,
            paddingBottom: width * 0.025, 
            paddingTop: width * 0.025,
            borderRadius: width * 0.025},
        isHovered && {
            shadowColor: '#0096c7',
            shadowOffset: { width: 4, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 10,},
        style
    ];

    return (
        <Pressable
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            style={ContainerStyles}
        >
            <Animated.View style={[styles.content, { opacity: iconOpacity }]}>
                <Image source={icon} style={{height: width * 0.1}} resizeMode='contain' />
                <FONT type={'Title2'} style={{ marginTop: width * 0.002, fontSize: 30, width: width * 0.15, textAlign: 'center'}}>{text}</FONT>
            </Animated.View>
            <Animated.View style={[styles.content, { transform: [{ scale: textScale }] }]}>
                {isHovered && <FONT type='Title2' style={{fontSize: 100}}>{nummber}</FONT>}
                {isHovered && <FONT type={'Title2'} style={{fontSize: 30, textAlign: 'center', width: width * 0.15}} >{text}</FONT>}
            </Animated.View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default HoverButton;
