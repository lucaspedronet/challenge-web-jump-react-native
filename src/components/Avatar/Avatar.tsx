import React from 'react';
import {Image, ImageProps} from 'react-native';

import {
  IconProfileAvatar,
  IconBatman,
  IconDeadpool,
  IconGuardians,
} from '~assets/icons';

import * as S from './Avatar.styles';

const iconsComponent: IconComponentType = {
  Avatar: IconProfileAvatar,
  Batman: IconBatman,
  Deadpool: IconDeadpool,
  Guardians: IconGuardians,
};

export type IconName = 'Avatar' | 'Batman' | 'Deadpool' | 'Guardians';

type IconComponentType = {
  [keyof in IconName]: React.ReactElement<ImageProps>;
};

type IconType<T extends IconName> = {
  [key in keyof T]: React.ReactElement<ImageProps>;
};

type AvatarProps = {
  icon: IconType<IconName>;
  slog: string[];
};

export function Avatar({icon, slog}: AvatarProps) {
  if (slog.includes(icon)) {
    console.log({slog});
  }
  return (
    <S.Container>
      <Image source={iconsComponent[icon]} />
    </S.Container>
  );
}
