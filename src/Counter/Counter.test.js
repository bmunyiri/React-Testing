import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

it('renders the component header', () => {
  render(<Counter />);
  expect(screen.getByText('Universal Counter')).toBeInTheDocument();
});

it( 'renders the initial text of 0', () => {
    
    render( <Counter /> );
    expect(screen.getByTextId("counter")).toBe('0')
} )

it( "render s the initial input value of '1'", () => {
    
    render( <Counter /> );
    expect(screen.queryAllByDisplayValue("1")).toBe("1")
} )

Text( "renders the addtion button with +", () => {
    
    render( <Counter /> )
     expect(screen.getByTextId("add")).toBe('+')
} )

Text( "renders the subtraction button with -", () => {
    
    render( <Counter /> )
     expect(screen.getByTextId("subtract")).toBe('-')
} )
