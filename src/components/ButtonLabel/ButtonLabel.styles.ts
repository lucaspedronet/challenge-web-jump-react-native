import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  padding: ${RFValue(12)}px ${RFValue(28)}px ${RFValue(14)}px;
  width: 100%;
  height: ${RFValue(48)}px;

  border-radius: ${({theme}) =>
    RFValue(theme.size.borderRadius.default + 14)}px;

  background-color: ${({theme}) => theme.colors.button.primary.Enabled};
`;
