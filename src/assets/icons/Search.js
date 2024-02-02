import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Circle cx={11} cy={11} r={7} stroke="rgba(255,255,255, 0.85)" strokeWidth={2} />
    <Path
      stroke="rgba(255,255,255, 0.85)"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 8a3 3 0 0 0-3 3M20 20l-3-3"
    />
  </Svg>
);
export default SvgSearch;
