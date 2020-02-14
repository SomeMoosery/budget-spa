import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import Welcome from './components/Welcome'

test('basic test', () => {
  const { getByText } = render(<Welcome />);
  const text = getByText(/Welcome/i);
  expect(text).toBeInTheDocument();
});
