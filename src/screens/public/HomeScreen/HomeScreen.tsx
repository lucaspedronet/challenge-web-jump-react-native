import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Avatar,
  ErrorNetwork,
  Header,
  LayoutScreen,
  Paragraph,
  RenderCondition
} from '~components';

import { Films } from '../../../types/films';
import { useAppDispatch } from "../../../store/hooks/useAppDispatch";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { filmsPopularAsync } from "../../../store/films/thunks";
import { useNetwork } from '~hooks';

import * as S from './HomeScreen.styles';

export function HomeScreen() {
  const dispatch = useAppDispatch();
  const { films, loading } = useAppSelector((store) => store.films);
  const { execute, isErrorNetwork } = useNetwork();

  const fetchStocks = useCallback(() => {
    execute(async () => {
      dispatch(filmsPopularAsync());
    });
  }, []);

  useEffect(() => fetchStocks(), [fetchStocks]);

  function handleTryAgain() {
    fetchStocks();
  }

  return (
    <LayoutScreen
      isPadding="zero"
      isScroll={false}
    >
      <>
        <Header title={'Filmes populares'} />
        <S.Container>
          <RenderCondition condition={!loading && !isErrorNetwork.current}>
          <FlatList<Films>
            data={films}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <S.Film key={item.title} >
                <Avatar icon={'Avatar'} slog={[item.title]} />
                <Paragraph weight={'Regular'}>{item.title}</Paragraph>
              </S.Film>
            )}
          />
        </RenderCondition>

        <RenderCondition condition={!loading && isErrorNetwork.current}>
          <View style={styles.iconLoad}>
            <ErrorNetwork onTryAgain={handleTryAgain} />
          </View>
        </RenderCondition>
        </S.Container>
      </>
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingVertical: 37,
  },
  iconLoad: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
