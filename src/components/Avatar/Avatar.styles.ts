import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;

  border-radius: ${RFValue(20)}px;
`;
