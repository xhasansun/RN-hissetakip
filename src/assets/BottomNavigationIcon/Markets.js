import * as React from 'react';
import Svg, {Mask, Rect} from 'react-native-svg';
const SvgMarkets = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 23 22"
    {...props}>
    <Mask id="Markets_svg__a" fill="#fff">
      <Rect width={6.242} height={13.375} y={8.025} rx={1} />
    </Mask>
    <Rect
      width={6.242}
      height={13.375}
      y={8.025}
      stroke={props.stroke}
      strokeWidth={4}
      mask="url(#Markets_svg__a)"
      rx={1}
    />
    <Mask id="Markets_svg__b" fill="#fff">
      <Rect width={6.242} height={21.4} x={8.025} rx={1} />
    </Mask>
    <Rect
      width={6.242}
      height={21.4}
      x={8.025}
      stroke={props.stroke}
      strokeWidth={4}
      mask="url(#Markets_svg__b)"
      rx={1}
    />
    <Mask id="Markets_svg__c" fill="#fff">
      <Rect width={5.35} height={16.942} x={16.942} y={4.458} rx={1} />
    </Mask>
    <Rect
      width={5.35}
      height={16.942}
      x={16.942}
      y={4.458}
      stroke={props.stroke}
      strokeWidth={4}
      mask="url(#Markets_svg__c)"
      rx={1}
    />
  </Svg>
);
export default SvgMarkets;
