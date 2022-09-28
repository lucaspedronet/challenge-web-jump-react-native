import React from 'react';
import {Text, TextProps} from 'react-native';

import * as Component from './TitleBase.styles';

type Size = 'small' | 'default';

type Weight = 'Regular' | 'Medium' | 'Bold' | 'SemiBold';

export interface TitleBaseProps extends TextProps {
  children: React.ReactElement<typeof Text> | string;
  weight: Weight;
  size?: Size;
}

export function TitleBase({
  children,
  weight = 'Medium',
  size = 'default',
  ...rest
}: TitleBaseProps) {
  return (
    <Component.Container
      weight={weight}
      size={size}
      {...rest}>
      {children}
    </Component.Container>
  );
}
