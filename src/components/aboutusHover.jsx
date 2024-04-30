    import React from 'react';
    import { View, StyleSheet, Pressable, Image, useWindowDimensions, Animated } from 'react-native';
    import FONT from './Titles';

    export const aboutusHover = ({
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
        const textmove = height*0.22;

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
    { width: width * 0.18, height: height * 0.34 },
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
                style={ContainerStyles}
            >
                <Animated.View style={[styles.content, { opacity: iconOpacity }]}>
                    <Image source={icon} style={styles.icon} resizeMode='contain' />
                </Animated.View>
                <Animated.View style={[styles.content, { opacity: 1 - iconOpacity, transform: [{ translateY: textTranslateY }] }]}>
                    <FONT type={'Title4'} style={{ marginTop: '60%', width:'50%', textAlign:'center'}}>{text}</FONT>
                </Animated.View>
                <Animated.View style={[styles.description, {opacity:descrOpacity,}]}>
                    <FONT style={[styles.descrtext, {width: width * 0.18, height:height * 0.19}]} type={'Subtitle3'}>{descr}</FONT>
                </Animated.View>

        

            </Pressable>
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
            borderBottomLeftRadius:35,
            borderBottomRightRadius:35,
            marginTop:'35%',
            paddingTop:10,
            backgroundColor:'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        descrtext:{
            textAlign:'center',
            alignItems:'center',
            justifyContent:'center',
            paddingRight:10,
            paddingLeft:10,
        },
        icon: {
            height: '55%',
            marginBottom:'20%'
        }
    });

    export default aboutusHover;
