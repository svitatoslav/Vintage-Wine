import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomSelect from './CustomSelect';

describe('<CustomSelect />', () => {
  test('it should mount', () => {
    render(<CustomSelect />);
    
    const customSelect = screen.getByTestId('CustomSelect');

    expect(customSelect).toBeInTheDocument();
  });
});