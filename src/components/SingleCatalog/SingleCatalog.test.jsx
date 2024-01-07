import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleCatalog from './SingleCatalog';

describe('<SingleCatalog />', () => {
  test('it should mount', () => {
    render(<SingleCatalog />);
    
    const singleCatalog = screen.getByTestId('SingleCatalog');

    expect(singleCatalog).toBeInTheDocument();
  });
});