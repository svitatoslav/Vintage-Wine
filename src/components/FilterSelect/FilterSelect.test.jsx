import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterSelect from './FilterSelect';

describe('<FilterSelect />', () => {
  test('it should mount', () => {
    render(<FilterSelect />);
    
    const filterSelect = screen.getByTestId('FilterSelect');

    expect(filterSelect).toBeInTheDocument();
  });
});