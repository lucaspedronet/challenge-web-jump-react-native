import React from 'react';
import {StyleSheet} from 'react-native';
import {ButtonLabel} from '../ButtonLabel/ButtonLabel';
import {Paragraph} from '../Paragraph/Paragraph';

import * as Component from './ErrorNetwork.styles';

export type ErrorNetworkProps = {
  onTryAgain: () => void;
  slog: string;
};

export function ErrorNetwork({onTryAgain, slog}: ErrorNetworkProps) {
  return (
    <Component.Container>
      <Paragraph
        weight="Bold"
        typeFont="Medium"
        size="default"
        color="default"
        style={styles.title}>
        Ocorreu um erro.
      </Paragraph>
      <Paragraph
        weight="Regular"
        typeFont="Regular"
        size="small"
        color="default"
        style={styles.description}>
        <>
          Não foi possível se conectar ao {slog}.
        </>
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
