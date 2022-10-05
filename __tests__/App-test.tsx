/**
 * @format
 */

import 'react-native';
import React from 'react';
import {App} from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { theme } from '~config/theme';
import { ThemeProvider } from 'styled-components/native';

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

it('renders correctly', () => {
  renderer.create(<Providers />);
});
