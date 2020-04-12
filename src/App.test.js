import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders login form on intial render', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});
