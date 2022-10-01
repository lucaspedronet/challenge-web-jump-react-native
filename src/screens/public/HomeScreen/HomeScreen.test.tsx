import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from './HomeScreen';

const wrapper = (props) => render(<HomeScreen {...props} />);

test('renderização padrão', () => {
  const { container } = wrapper({});

  expect(container).toMatchSnapshot();
});
