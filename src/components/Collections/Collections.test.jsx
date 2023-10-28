import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Collections from './Collections';

describe('<Collections />', () => {
  test('it should mount', () => {
    render(<Collections />);
    
    const collections = screen.getByTestId('Collections');

    expect(collections).toBeInTheDocument();
  });
});