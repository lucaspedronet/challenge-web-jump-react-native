import React, { useEffect, useState } from 'react';
import { Avatar, ButtonLabel, Header, LayoutScreen, Paragraph } from '~components';
import { AxiosError } from 'axios';
import { getFilms } from '~services';

import { IFilms } from '../../../types/films';
import * as S from './HomeScreen.styles';

export function HomeScreen() {
  const [films, setFilms] = useState<IFilms[]>([]);

  useEffect(() => {
    async function loafing() {
      try {
        const data = await getFilms();

        console.group("Dada")
        console.log({data});
        console.groupEnd()
        setFilms(data);

      } catch (error) {
        // console.log(error.message);
        if (error instanceof AxiosError) {
          console.group()
          console.table(error.config);
          console.groupEnd()
        }
      }
    }

    loafing();
  }, []);

  return (
    <LayoutScreen
      isPadding="default"
      isScroll
      footer={<ButtonLabel>Carregar</ButtonLabel>}
    >
      <>
        <Header title={'Filmes populares'} />
        <S.Container>
          {films?.map(f => {
            return (
              <S.Film key={f.title} >
                <Avatar icon={'Avatar'} slog={[f.title]} />
                <Paragraph weight={'Regular'}>{f.title}</Paragraph>
              </S.Film>
            );
          })}
        </S.Container>
      </>
    </LayoutScreen>
  );
}
