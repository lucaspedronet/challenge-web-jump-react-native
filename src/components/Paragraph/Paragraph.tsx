import React from 'react';
import {Text, TextProps} from 'react-native';

import * as Component from './Paragraph.styles';

type Size = 'small' | 'default' | 'large';

type Weight = 'Regular' | 'Medium' | 'Bold' | 'SemiBold';

export interface ParagraphProps extends TextProps {
  children: React.ReactElement<typeof Text> | string;
  weight: Weight;
  size?: Size;
}

export function Paragraph({
  children,
  weight = 'Medium',
  size = 'default',
  ...rest
}: ParagraphProps) {
  return (
    <Component.Container
      weight={weight}
      size={size}
      {...rest}>
      {children}
    </Component.Container>
  );
}
