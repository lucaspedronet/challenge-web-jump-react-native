import React from 'react';
import { render } from '@testing-library/react-native';
import { ButtonLabel, ButtonLabelProps } from './ButtonLabel';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '~config/theme';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const wrapper = (props: ButtonLabelProps) => render(
  <ButtonLabel {...props} />,
  {wrapper: Providers}
);

test('renderização padrão', () => {
  const component = wrapper({children: 'Entrar'})
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
