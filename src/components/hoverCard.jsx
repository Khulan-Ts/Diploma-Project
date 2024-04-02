import * as React from "react";

import { View, StyleSheet, Image } from "react-native";

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
    onPress2
}) => {
  const containerStyles=[
    styles.container,
    type === 'Secondary' && {width: 882, height: 391, paddingTop: 41, paddingLeft: 36, paddingBottom: 41, paddingRight: 36, }
  ]
  const imageStyle=[
    styles.img,
    type=== 'Secondary' && {width: 356, height: 306,},
    type=== 'Sport' && {width: 261, height: 171}
  ]
  return (
    <View style={containerStyles}>
        <View style={{flexDirection: "row",}}>
            {<View style={{flexDirection: 'column'}}>
                <Image source={image} style={imageStyle}/>
                {type === 'Sport' &&
                <View style={{alignItems: 'center'}}>
                    <Button type="Fifth" text={button} onPress={onPress1} style={{marginTop: 54}}></Button>
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
        width: 745,
        height: 360,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#EDF0FF'
    },
    img:{
        width: 246,
        height: 275,
        borderRadius: 10,
    },
});
