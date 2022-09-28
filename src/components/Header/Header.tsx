import React from 'react';
import { TitleBase } from '../TitleBase/TitleBase';

import * as Component from './Header.styles';

export type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <Component.Container>
      <TitleBase weight={"Bold"}>
        {title}
      </TitleBase>
    </Component.Container>
  );
}
