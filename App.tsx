// import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';

import {HomeScreen} from '~screens/public';
import { store } from "./src/store";
import {theme} from './src/config/theme';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </Provider>

  );
}
