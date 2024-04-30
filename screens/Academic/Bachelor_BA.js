import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Bachelor_BA= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const images = [
        require('../../assets/images/choihuipark.png'),
        require('../../assets/images/choihuipark.png'),
        require('../../assets/images/choihuipark.png'),
        require('../../assets/images/choihuipark.png'),
        require('../../assets/images/choihuipark.png'),
    ]
    

    return (
    <ScrollView
      style={styles.container}
    >
        <View>
            <View style={{
                backgroundColor: 'white',
                padding: 10,
                borderBottomEndRadius: 15,
                borderBottomStartRadius:15,
                alignItems:'center'
            }}>

            </View>
        <ScrollView alwaysBounceHorizontal={true} horizontal>
            {images.map((source) => (
                <View key={source} style={{

                }}>
                    <Image
                    source={source}
                    style={{
                        width: width*1,
                        resizeMode:'contain'
                    }}/>
                </View>
            ))}
            
        </ScrollView>

        </View>
    </ScrollView>
  );
}

export default Bachelor_BA

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fcfc"
  },
});