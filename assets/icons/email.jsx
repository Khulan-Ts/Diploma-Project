import Svg, { Path } from 'react-native-svg';

const Email = ({
  width,
  height,
  testID,
 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 25 19"
    fill="none"
    testID={testID}
  >
    <Path d="M22.8027 0.710938H2.19727C0.988184 0.710938 0 1.69478 0 2.9082V16.0918C0 17.3057 0.988818 18.2891 2.19727 18.2891H22.8027C24.0118 18.2891 25 17.3052 25 16.0918V2.9082C25 1.69448 24.0113 0.710938 22.8027 0.710938ZM22.4653 2.17578C21.7549 2.88853 13.4104 11.2603 13.0676 11.6042C12.7812 11.8914 12.2189 11.8916 11.9324 11.6042L2.53467 2.17578H22.4653ZM1.46484 15.8225V3.17749L7.76685 9.5L1.46484 15.8225ZM2.53467 16.8242L8.80098 10.5375L10.895 12.6383C11.7531 13.4992 13.2473 13.4989 14.1051 12.6383L16.1991 10.5375L22.4653 16.8242H2.53467ZM23.5352 15.8225L17.2332 9.5L23.5352 3.17749V15.8225Z" fill="white"/>
  </Svg>
);

export default Email;
