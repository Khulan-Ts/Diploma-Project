import React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';
import FONT from './Titles';

const TeacherRow = ({teachers}) => {
    const { width } = useWindowDimensions();

    return (
        chunkArray(teachers, 5).map((row, index) => (
            <View key={index} style={{ flexDirection: 'row' }}>
              {row.map((teacher) => (
                <View key={teacher.id} style={{ alignItems: 'center', marginRight: width * 0.02 }}>
                  <Image source={{uri: teacher.image}} style={{ width: width * 0.135, height: width * 0.145 }} resizeMode="contain" />
                  <FONT type="Subtitle" style={{ fontSize: 15, marginTop: width * 0.003, marginBottom: width * 0.025 }}>{teacher.name}</FONT>
                </View>
              ))}
            </View>
          ))
    );
};

function chunkArray(arr, size) {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, []);
}

export default TeacherRow;