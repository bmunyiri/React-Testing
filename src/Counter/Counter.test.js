import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

it('renders welcome message', () => {
  render(<Counter />);
  expect(screen.getByText('Universal Counter')).toBeInTheDocument();
});