import styled, {css} from 'styled-components/native';
import {Text} from 'react-native';
import {TitleBaseProps} from './TitleBase';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(Text)<
  Pick<TitleBaseProps, 'weight' | 'size'>
>`
  ${({theme, weight, size}) => css`
    font-weight: ${theme.font.fontWeight[weight]};
    font-size: ${
      size
        ? RFValue(theme.size.scaleFont.title[size])
        : RFValue(theme.size.scaleFont.title.default)
    }px;
    line-height: ${
      size
        ? RFValue(
            theme.size.scaleFont.title[size] * theme.size.styles.lineHeight,
          )
        : RFValue(
            theme.size.scaleFont.paragraph.default *
              theme.size.styles.lineHeight,
          )
    }px
    color: ${theme.colors.title.white};
  `};
  font-style: normal;
`;
