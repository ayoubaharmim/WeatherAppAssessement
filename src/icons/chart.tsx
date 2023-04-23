import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
export const ChartIcon = (props?: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 15v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H21M3 15V5m0 10 3.853-3.21.004-.003c.697-.581 1.046-.872 1.425-.99.447-.14.929-.118 1.362.061.367.153.688.474 1.332 1.118l.006.006c.654.654.981.982 1.354 1.133a2 2 0 0 0 1.385.046c.383-.128.733-.434 1.433-1.046L21 7"
    />
  </Svg>
);
