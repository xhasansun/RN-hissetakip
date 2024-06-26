import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPortfolio = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 26 24"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M18.185 0c4.107 0 7.448 3.34 7.448 7.45v8.913c0 4.107-3.341 7.45-7.448 7.45H7.449C3.342 23.812 0 20.47 0 16.362V7.449C0 3.341 3.342 0 7.45 0h10.735Zm0 1.863H7.449a5.593 5.593 0 0 0-5.586 5.586v8.914a5.593 5.593 0 0 0 5.586 5.586h10.736a5.592 5.592 0 0 0 5.585-5.586v-.348h-4.096a4.28 4.28 0 0 1-4.275-4.27 4.281 4.281 0 0 1 4.275-4.276l4.096-.001v-.019a5.592 5.592 0 0 0-5.585-5.586ZM23.77 9.33h-4.096a2.416 2.416 0 0 0-2.412 2.412 2.415 2.415 0 0 0 2.412 2.41h4.096V9.33Zm-3.528 1.404a.932.932 0 0 1 0 1.863h-.387a.932.932 0 0 1 0-1.863h.387ZM13.27 5.636a.932.932 0 0 1 0 1.863H6.565a.932.932 0 0 1 0-1.863h6.705Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPortfolio;
