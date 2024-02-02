import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgHome = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 33 37"
    {...props}>
    <G filter="url(#Home_svg__a)">
      <Path
        stroke={props.stroke}
        strokeWidth={2.5}
        d="M27.348 25.57V14.024l.11-.664-.556-.458-9.554-7.868-.794-.654-.795.654-9.554 7.868-.556.458.11.664V25.57a3.295 3.295 0 0 0 3.295 3.295h4.66V20.115c0-.439.355-.795.794-.795h4.09c.44 0 .796.356.796.795v8.75h4.659a3.295 3.295 0 0 0 3.295-3.296Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgHome;
