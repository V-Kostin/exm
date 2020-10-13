import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const SquareForRotation = () => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <Rect width="28" height="28" rx="2" fill="black" fill-opacity="0.5" opacity="0.5"/>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M26 3C26 2.44772 25.5523 2 25 2H19C18.4477 2 18 2.44772 18 3C18 3.55228 18.4477 4 19 4H24V9C24 9.55228 24.4477 10 25 10C25.5523 10 26 9.55228 26 9V3ZM26 19C26 18.4477 25.5523 18 25 18C24.4477 18 24 18.4477 24 19V24H19C18.4477 24 18 24.4477 18 25C18 25.5523 18.4477 26 19 26H25C25.5523 26 26 25.5523 26 25V19ZM3 18C3.55228 18 4 18.4477 4 19V24H9C9.55228 24 10 24.4477 10 25C10 25.5523 9.55228 26 9 26H3C2.44772 26 2 25.5523 2 25V19C2 18.4477 2.44772 18 3 18ZM9 4H4V9C4 9.55228 3.55228 10 3 10C2.44772 10 2 9.55228 2 9V3C2 2.44772 2.44772 2 3 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4Z" fill="white"/>
</Svg>

);

export default SquareForRotation;
