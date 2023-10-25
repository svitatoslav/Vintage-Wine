import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Catalog from './Catalog';

describe('<Catalog />', () => {
  test('it should mount', () => {
    render(<Catalog />);
    
    const catalog = screen.getByTestId('Catalog');

    expect(catalog).toBeInTheDocument();
  });
});