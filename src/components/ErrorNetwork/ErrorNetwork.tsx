import React from 'react';
import {StyleSheet} from 'react-native';
import {ButtonLabel} from '../ButtonLabel/ButtonLabel';
import {Paragraph} from '../Paragraph/Paragraph';

import * as Component from './ErrorNetwork.styles';

export type ErrorNetworkProps = {
  onTryAgain: () => void;
};

export function ErrorNetwork({onTryAgain}: ErrorNetworkProps) {
  return (
    <Component.Container>
      <Paragraph
        weight="Bold"
        size="default"
        style={styles.title}>
        Ocorreu um erro.
      </Paragraph>
      <Paragraph
        weight="Regular"
        size="small"
        style={styles.description}>
          Não foi possível se conectar ao servidor. Verifique sua conexão!
      </Paragraph>

      <ButtonLabel onPress={onTryAgain}>
        TENTAR NOVAMENTE
      </ButtonLabel>
    </Component.Container>
  );
}

const styles = StyleSheet.create({
  title: {textAlign: 'center', marginBottom: 12},
  description: {textAlign: 'center', marginBottom: 20},
});
