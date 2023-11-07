import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Excursions from './Excursions';

describe('<Excursions />', () => {
  test('it should mount', () => {
    render(<Excursions />);
    
    const excursions = screen.getByTestId('Excursions');

    expect(excursions).toBeInTheDocument();
  });
});