import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalProdAddedToCart from './ModalProdAddedToCart';

describe('<ModalProdAddedToCart />', () => {
  test('it should mount', () => {
    render(<ModalProdAddedToCart />);
    
    const ModalProdAddedToCart = screen.getByTestId('ModalProdAddedToCart');

    expect(ModalProdAddedToCart).toBeInTheDocument();
  });
});