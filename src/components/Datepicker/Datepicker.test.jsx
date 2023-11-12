import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Datepicker from './Datepicker';

describe('<Datepicker />', () => {
  test('it should mount', () => {
    render(<Datepicker />);
    
    const datepicker = screen.getByTestId('Datepicker');

    expect(datepicker).toBeInTheDocument();
  });
});