import * as React from "react";

import { View, StyleSheet, Image, useWindowDimensions } from "react-native";

import Button from "./Button";
import FONT from "./Titles";

export const HoverCard = ({
    image, //source link always have require("")
    title,
    type = 'Primary',
    children,
    button,
    button2,
    onPress1,
    onPress2,
}) => {
    const { width, height } = useWindowDimensions();

    const containerStyles=[
        styles.container,
        (type === 'Primary' || 'Sport') && {
            width: width * 0.58,
            height: height * 0.54,
            paddingTop: height * 0.05,
            paddingBottom: height * 0.05,
            paddingLeft: width * 0.03,
            paddingRight: type === 'Primary' ? width * 0.04 : width * 0.03},
        type === 'Secondary' && {
            width: width * 0.58,
            height: height * 0.6,
            paddingTop: height * 0.06,
            paddingLeft: height * 0.06,
            paddingBottom: height * 0.04,
            paddingRight: width * 0.04
        },
    ]
    const imageStyle=[
        styles.img,
        type === 'Primary' &&{ width: width * 0.2, height: height * 0.45}, 
        type === 'Secondary' && {width: width * 0.25, height: height * 0.48,},
        type === 'Sport' && {width: width * 0.2, height: height * 0.3}
    ]
    return (
        <View style={containerStyles}>
            <View style={{flexDirection: "row",}}>
                {<View style={{flexDirection: 'column'}}>
                    <Image source={image} style={imageStyle}/>
                    {type === 'Sport' &&
                    <View style={{alignItems: 'center'}}>
                        <Button type="Fifth" text={button} onPress={onPress1} style={{marginTop: height * 0.05}}></Button>
                    </View>}
                </View>}
                <View style={{flexDirection: 'column', alignItems:'center', marginLeft: 20, flex: 1}}>
                    <FONT type='Title2'>{title}</FONT>
                    <View style={{maxWidth: 400, alignSelf:"center", marginTop: 21}}>
                    <FONT type='Regular' style={{fontSize: 17, textAlign: type === 'Secondary' ? 'center': undefined}}>
                        {children}
                    </FONT>
                    </View>
                    {type !== 'Sport' && <View style={{marginTop: 'auto', marginLeft: button2? 'auto': undefined}}>
                        <View style={{flexDirection: 'row-reverse', alignItems:'center'}}>
                            <Button type="Fifth" text={button} onPress={onPress1}></Button>
                            {button2 && <Button type="Sixth" text={button2} onPress={onPress2} style={{marginRight: 7}}></Button>}
                        </View>
                    </View>}
                </View>
            </View>
        </View>
    )
};
export default HoverCard;

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        backgroundColor: '#EDF0FF'
    },
    img:{
        borderRadius: 10,
    },
});
