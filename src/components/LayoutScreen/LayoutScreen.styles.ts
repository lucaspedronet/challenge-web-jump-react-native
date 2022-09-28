import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PaddingType} from './LayoutScreen';

export const Container = styled.View<{isPadding: PaddingType}>`
  flex: 1;

  ${({theme, isPadding}) => css`
    padding: 0 ${RFValue(theme.size.padding[isPadding])}px;
  `}
`;
