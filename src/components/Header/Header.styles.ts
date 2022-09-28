import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: ${RFValue(100)}px;

  padding: 0 ${({ theme }) => RFValue(theme.size.padding.default)}px;

  background-color: ${({ theme }) => theme.colors.app.black};
`;
