import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterOption from './FilterOption';

describe('<FilterOption />', () => {
  test('it should mount', () => {
    render(<FilterOption />);
    
    const filterOption = screen.getByTestId('FilterOption');

    expect(filterOption).toBeInTheDocument();
  });
});