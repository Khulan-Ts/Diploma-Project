import Svg, { Path } from 'react-native-svg';

const Calendar = ({
  width,
  height,
 }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 28 28"
    fill="none"
  >
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M23.3346 4.66699H22.0013V2.00033C22.0013 1.26395 21.4043 0.666992 20.668 0.666992C19.9316 0.666992 19.3346 1.26395 19.3346 2.00033V4.66699H8.66797V2.00033C8.66797 1.26395 8.07101 0.666992 7.33464 0.666992C6.59826 0.666992 6.0013 1.26395 6.0013 2.00033V4.66699H4.66797C2.45883 4.66699 0.667969 6.45785 0.667969 8.66699V23.3337C0.667969 25.5428 2.45883 27.3337 4.66797 27.3337H23.3346C25.5438 27.3337 27.3346 25.5428 27.3346 23.3337V8.66699C27.3346 6.45785 25.5438 4.66699 23.3346 4.66699ZM3.33464 8.66699C3.33464 7.93061 3.93159 7.33366 4.66797 7.33366H23.3346C24.071 7.33366 24.668 7.93061 24.668 8.66699V10.0003H3.33464V8.66699ZM23.3346 24.667C24.071 24.667 24.668 24.07 24.668 23.3337V12.667H3.33464V23.3337C3.33464 24.07 3.93159 24.667 4.66797 24.667H23.3346Z" fill="#3D2562"/>

  </Svg>
);

export default Calendar;