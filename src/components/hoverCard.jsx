import * as React from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import Button from "./Button";
import FONT from "./Titles";

export const HoverCard = ({
    image,
    title,
    bottomText,
    type = 'Primary',
    children,
    button,
    onPress1,
}) => {
    const { width, height } = useWindowDimensions();

    const containerStyles = [
        styles.container,
        {borderRadius: width * 0.015},
        (type === 'Primary' || type === 'Sport') && {
            width: width * 0.54,
            height: width * 0.26,
            paddingTop: width * 0.021,
            paddingBottom: width * 0.021,
            paddingLeft: width * 0.03,
            paddingRight: type === 'Primary' ? width * 0.04 : width * 0.03,
        },
        type === 'Secondary' && {
            width: width * 0.58,
            height: width * 0.26,
            paddingTop: width * 0.03,
            paddingLeft: width * 0.027,
            paddingBottom: width * 0.03,
            paddingRight: width * 0.027
        },
    ];

    const imageStyle = [
        {borderRadius: width * 0.007},
        type === 'Primary' && { width: width * 0.2, height: width * 0.22 },
        type === 'Secondary' && { width: width * 0.25, height: width * 0.2 },
        type === 'Sport' && { width: width * 0.21, height: width * 0.15 }
    ];

    return (
        <View style={containerStyles}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: 'column' }}>
                    <Image source={image} style={imageStyle} />
                    {bottomText && <FONT style={{fontSize: 17, width: width * 0.2, marginTop: width * 0.01}}>{bottomText}</FONT>}
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: width * 0.015, flex: 1 }}>
                    <FONT type='Title2' style={{fontSize: 30}}>{title}</FONT>
                    <View style={{ maxWidth: width * 0.26, alignSelf: "center", marginTop: width * 0.01 }}>
                        <FONT type='Regular' style={{ fontSize: 16, textAlign: type === 'Secondary' ? 'center' : undefined }}>
                            {children}
                        </FONT>
                    </View>
                        <View style={{ marginTop: 'auto', marginLeft: 'auto' }}>
                            {button && <Button type="Fifth" text={button} onPress={onPress1}></Button>}
                        </View>
                </View>
            </View>
        </View>
    );
};

export default HoverCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDF0FF'
    },
});
