import React from 'react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Middleware, Dispatch, AnyAction } from 'redux';

import { theme } from '~config/theme';
import { HomeScreen,  } from './HomeScreen';
import { filmsPopularAsync } from '../../../store/films/thunks';


const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const wrapper = (props) => render(
  <HomeScreen {...props} />,
  {wrapper: Providers}
);

const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] | undefined = [thunk]
const mockStore = configureStore(middlewares);

test.skip('renderização padrão', () => {
  const component = wrapper({})
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('chama dispatch fetchByPopularFilms', async () => {
  const mockInitialState = {
    films: [],
    loading: false,
  };

  const store = mockStore(mockInitialState);
  await store.dispatch(filmsPopularAsync() as any);
  const actions = store.getActions();

  expect(actions).toHaveLength(2);
  expect(actions[0].type).toEqual("films/fetchByPopularFilms/pending");
  expect(actions[1].payload).toBeTruthy();
})
