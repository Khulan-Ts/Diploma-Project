
import Svg, { Path } from 'react-native-svg';
import React from 'react';
import { Pressable } from 'react-native';

const Facebook = ({
  width,
  height,
  testID,
  onPress
 }) => (
    <Pressable onPress={onPress}>
  <Svg
    width={width}
    height={height}
    viewBox="0 0 15 25"
    fill="none"
    testID={testID}
  >
    <Path d="M8.7818 25H4.77044C4.10042 25 3.55538 24.456 3.55538 23.7873V14.7572H1.21507C0.54504 14.7572 0 14.213 0 13.5445V9.67503C0 9.00631 0.54504 8.46233 1.21507 8.46233H3.55538V6.52466C3.55538 4.60339 4.15985 2.96879 5.30325 1.79787C6.45181 0.621605 8.05693 0 9.94508 0L13.0043 0.00495908C13.6732 0.00610352 14.2173 0.550079 14.2173 1.21765V4.81033C14.2173 5.47905 13.6724 6.02303 13.0026 6.02303L10.9429 6.02379C10.3147 6.02379 10.1547 6.14948 10.1205 6.18801C10.0641 6.25191 9.99706 6.43253 9.99706 6.93131V8.46214H12.8478C13.0624 8.46214 13.2704 8.51498 13.449 8.61454C13.8345 8.8295 14.0742 9.23596 14.0742 9.67522L14.0726 13.5447C14.0726 14.213 13.5276 14.757 12.8576 14.757H9.99706V23.7873C9.99706 24.456 9.45183 25 8.7818 25ZM5.02385 23.5344H8.52839V14.101C8.52839 13.6545 8.89245 13.2914 9.33965 13.2914H12.6042L12.6055 9.92794H9.33945C8.89226 9.92794 8.52839 9.56478 8.52839 9.11827V6.93131C8.52839 6.35872 8.58668 5.70755 9.01973 5.21813C9.54298 4.62647 10.3676 4.55818 10.9425 4.55818L12.7488 4.55742V1.47018L9.94393 1.46561C6.90951 1.46561 5.02385 3.40424 5.02385 6.52466V9.11827C5.02385 9.56459 4.65998 9.92794 4.21279 9.92794H1.46847V13.2914H4.21279C4.65998 13.2914 5.02385 13.6545 5.02385 14.101V23.5344Z"
    fill="white"/>

  </Svg>
  </Pressable>
);

export default Facebook;
