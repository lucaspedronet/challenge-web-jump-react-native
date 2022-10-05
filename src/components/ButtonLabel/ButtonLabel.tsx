import React from 'react';
import {StyleSheet, TouchableOpacityProps} from 'react-native';
import { Paragraph } from '../Paragraph/Paragraph';

import * as S from './ButtonLabel.styles';

export interface ButtonLabelProps extends TouchableOpacityProps {
  children: string;
}

export function ButtonLabel({children, ...rest}: ButtonLabelProps) {
  return (
    <S.Container {...rest}>
      <Paragraph
        weight="Medium"
        size="small"
        style={styles.label}>
          {children}
        </Paragraph>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  label: {textAlign: 'center'},
});
