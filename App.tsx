// import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {HomeScreen} from '~screens/public';

import {theme} from './src/config/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={theme.colors.app.primary}
      />
      <HomeScreen />
    </ThemeProvider>
  );
}
