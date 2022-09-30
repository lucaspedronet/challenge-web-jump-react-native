// import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {HomeScreen} from '~screens/public';
import { store } from "./src/store";
import {theme} from './src/config/theme';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={theme.colors.app.primary}
        />
        <HomeScreen />
      </ThemeProvider>
    </Provider>

  );
}
