import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from 'easy-peasy';
import { store } from './store';
import App from './App';

test('renders the loading spinner', () => {
  const { getByText } = render(
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );

  expect(getByText('Loading')).toBeInTheDocument();
});
