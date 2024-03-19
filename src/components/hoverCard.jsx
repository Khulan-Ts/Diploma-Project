import * as React from "react";

import {
  View,
  StyleSheet,
  Image
} from "react-native";

import Button from "./Button";
import FONT from "./Titles";

export const HoverCard = ({
    image, //source link
    image2,
    title,
    children,
    button,
    button2,
    onPress1,
    onPress2
}) => {
  const containerStyles=[
    styles.container,
    image2 && {paddingTop: 55, paddingLeft: 80, paddingBottom:48}
  ]
  return (
    <View style={containerStyles}>
        <View style={{flexDirection: "row",}}>
            {<View style={{flexDirection: 'column'}}>
                <Image source={image} style={image2? styles.img2: styles.img}/>
                {image2 && <Image source={image2} style={[styles.img2, {marginTop: 15}]}/>}
            </View>}
            <View style={{flexDirection: 'column', alignItems:'center', marginLeft: 20, flex: 1}}>
                <FONT type='Title2'>{title}</FONT>
                <View style={{maxWidth: 400, alignSelf:"center", marginTop: 21}}>
                <FONT type='Regular' style={{fontSize: 17, texAlign: 'center'}}>
                    {children}
                </FONT>
                </View>
                <View style={{marginTop: 'auto', marginLeft: button2? 'auto': undefined}}>
                    {<View style={{flexDirection: 'row-reverse', alignItems:'center'}}>
                        <Button type="Fifth" text={button} onPress={onPress1}></Button>
                        {button2 && <Button type="Sixth" text={button2} onPress={onPress2} style={{marginRight: 7}}></Button>}
                    </View>}
                </View>
            </View>
        </View>
    </View>
  )
};
export default HoverCard;

const styles = StyleSheet.create({
    container:{
        width: 936,
        height: 521,
        paddingTop: 62,
        paddingLeft: 60,
        paddingBottom: 79,
        paddingRight: 65,
        borderRadius: 20,
        backgroundColor: '#EDF0FF'
    },
    img:{
        width: 451,
        height: 396,
        borderRadius: 10,
    },
    img2:{
        width: 312,
        height: 205,
        borderRadius: 10
    }
});
