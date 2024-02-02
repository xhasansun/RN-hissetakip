import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgProfile = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 22 22"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.35 14.98h10.7a5.35 5.35 0 0 1 5.35 5.35 1.07 1.07 0 0 1-2.133.125l-.012-.314a3.21 3.21 0 0 0-3.016-3.016l-.189-.005H5.35a3.21 3.21 0 0 0-3.21 3.21 1.07 1.07 0 0 1-2.14 0 5.35 5.35 0 0 1 5.118-5.345l.232-.005h10.7-10.7ZM10.7 0a6.42 6.42 0 1 1 0 12.84A6.42 6.42 0 0 1 10.7 0Zm0 2.14a4.28 4.28 0 1 0 0 8.56 4.28 4.28 0 0 0 0-8.56Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgProfile;
