import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  background-color: ${({theme}) => theme.colors.screens.background.default};
`;

export const Film = styled.View`
  flex-direction: row;

  align-items: center;

  width: 100%;
  height: ${RFValue(40)}px;
`;
