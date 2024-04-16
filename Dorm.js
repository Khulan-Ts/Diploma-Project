import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";

const Dorm=({navigation})=>{

    return(
        <ScrollView style={{flex: 1}}>
            <View style={{ flexDirection: 'row', marginTop: 159}}>
                <View>
                    <View style={{marginLeft: 160, borderBottomWidth:1, width: 210, paddingBottom: 4, paddingLeft: 14}}>
                        <FONT type="Regular" style={{color: '#000'}}>Dorm</FONT>
                    </View >
                    <View style={{marginTop: 20, marginLeft: 160}}>
                        <View style={{borderBottomWidth: 1, width: 144}}>
                            <Button type="Secondary" text={"Housing"} ></Button>
                        </View>
                        <View style={{borderBottomWidth: 1, width: 144}}>
                            <Button type="Secondary" text={"Fee Information"} ></Button>
                        </View>
                        <View style={{borderBottomWidth: 1, width: 144}}>
                            <Button type="Secondary" text={"Application Form"} ></Button>
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default Dorm