import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmptyCartText from './EmptyCartText';

describe('<EmptyCartText />', () => {
  test('it should mount', () => {
    render(<EmptyCartText />);
    
    const emptyCartText = screen.getByTestId('EmptyCartText');

    expect(emptyCartText).toBeInTheDocument();
  });
});