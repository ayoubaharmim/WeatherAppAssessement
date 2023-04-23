import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ForeCastIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 32 32" {...props}>
    <Path d="m30.139 7.763-23.965-4.5a.749.749 0 0 0-.888.736L5.284 5.25H2.751V2a.75.75 0 0 0-1.5 0v28a.75.75 0 0 0 1.5 0v-9.25h2.502l-.002 1.248v.001c0 .414.336.75.75.751.027 0 .056-.002.084-.004l24-2.699a.753.753 0 0 0 .666-.746V8.5a.752.752 0 0 0-.607-.737l-.005-.001zm-8.895-.144v11.912l-7.494.843V6.212zM2.75 19.25V6.75h2.53l-.024 12.5zM6.783 4.903l5.467 1.026v14.612l-5.498.618zM29.25 18.631l-6.506.731V7.9l6.506 1.222z" />
  </Svg>
);
