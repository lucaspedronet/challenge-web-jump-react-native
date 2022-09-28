import styled, {css} from 'styled-components/native';
import {Text} from 'react-native';
import {ParagraphProps} from './Paragraph';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled(Text)<
  Pick<ParagraphProps, | 'weight' | 'size'>
>`
  ${({theme, weight, size}) => css`
    font-weight: ${theme.font.fontWeight[weight]};
    font-size: ${
      size
        ? RFValue(theme.size.scaleFont.paragraph[size])
        : RFValue(theme.size.scaleFont.paragraph.default)
    }px;
    line-height: ${
      size
        ? RFValue(
            theme.size.scaleFont.paragraph[size] *
              theme.font.lineHeight.Distant,
          )
        : RFValue(
            theme.size.scaleFont.paragraph.default *
              theme.font.lineHeight.Distant,
          )
    }px
    color: ${theme.colors.paragraph.default};
  `};
  font-style: normal;
`;
