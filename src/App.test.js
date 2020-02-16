import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('basic test', () => {
  const { getByText } = render(<App />);
  // const text = getByText(/App/i);
  // expect(text).toBeInTheDocument();
});
