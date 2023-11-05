import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutProduct from './AboutProduct';

describe('<AboutProduct />', () => {
  test('it should mount', () => {
    render(<AboutProduct />);
    
    const aboutProduct = screen.getByTestId('AboutProduct');

    expect(aboutProduct).toBeInTheDocument();
  });
});