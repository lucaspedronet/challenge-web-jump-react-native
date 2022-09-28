import React from 'react';
import {StyleSheet, TouchableOpacityProps} from 'react-native';
import { Paragraph } from '../Paragraph/Paragraph';

import * as S from './ButtonLabel.styles';

interface Props extends TouchableOpacityProps {
  children: string;
}

export function ButtonLabel({children, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <Paragraph
          weight="Medium"
          typeFont="Regular"
          size="small"
          color="white"
          style={styles.label}>
          {children}
        </Paragraph>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  label: {textAlign: 'center'},
});
