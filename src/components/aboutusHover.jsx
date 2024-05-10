    import React from 'react';
    import { StyleSheet, Pressable, Image, useWindowDimensions, Animated } from 'react-native';
    import FONT from './Titles';

    export const HoverButton2 = ({
        type,
        text,
        icon,
        descr,
        style
    }) => {
        const { width, height } = useWindowDimensions();

        const [isHovered, setIsHovered] = React.useState(false);
        const descrOpacity = React.useRef(new Animated.Value(0)).current;
        const iconOpacity = React.useRef(new Animated.Value(1)).current;
        const textTranslateY = React.useRef(new Animated.Value(0)).current;
        const textmove = width*0.095;

        const handleHoverIn = () => {
            setIsHovered(true);
            Animated.parallel([
                Animated.timing(iconOpacity, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }),
                Animated.timing(textTranslateY, {
                    toValue: -textmove, // Adjust this value to control the upward movement
                    duration: 200,
                    useNativeDriver: true
                }),
                Animated.timing(descrOpacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true
                }),
            ]).start();
        };

        const handleHoverOut = () => {
            setIsHovered(false);
            Animated.parallel([
                Animated.timing(iconOpacity, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true
                }),
                Animated.timing(textTranslateY, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                }),
                Animated.timing(descrOpacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true
                }),
            ]).start();
        };

  const ContainerStyles = [
    styles.container,
    { width: width * 0.18, height: width * 0.18 },
    isHovered && {
        shadowColor: '#0096c7',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        // Conditional background color change for upper part
        backgroundColor: '#EDF0FF' // Adjust the color as needed
    },
    style
];



        return (
            <Pressable
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
                style={[ContainerStyles, {borderRadius: width*0.04}]}
            >
                <Animated.View style={[styles.content, { opacity: iconOpacity }]}>
                    <Image source={icon} style={{height: width*0.085,marginBottom:width*0.05}} resizeMode='contain' />
                </Animated.View>
                <Animated.View style={[styles.content, { opacity: 1 - iconOpacity, transform: [{ translateY: textTranslateY }] }]}>
                    <FONT type={'Title4'} style={{ marginTop: width*0.1, width:width*0.11, textAlign:'center', fontSize:24}}>{text}</FONT>
                </Animated.View>
                <Animated.View style={[styles.description,{opacity:descrOpacity, paddingTop:width*0.005, marginTop:width*0.083, borderBottomLeftRadius:width*0.04, borderBottomRightRadius:width*0.04}]}>
                    <FONT style={{width: width * 0.18, height:width*0.09, fontSize:18,textAlign:'center',alignItems:'center',justifyContent:'center',paddingRight:width*0.005,paddingLeft:width*0.005,}}>{descr}</FONT>
                </Animated.View>

        

            </Pressable>
        );
    };
    const styles = StyleSheet.create({

        container: {
            
            backgroundColor: '#EDF0FF',
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 32,
            paddingTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
            position:'relative'
        },
        content: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
        description: {

            position: 'absolute',
            alignItems: 'center',
            textAlign: 'center',

            backgroundColor:'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        descrtext:{
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
        },

    });

    export default HoverButton2;
