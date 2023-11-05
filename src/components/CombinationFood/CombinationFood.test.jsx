import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CombinationFood from './CombinationFood';

describe('<CombinationFood />', () => {
  test('it should mount', () => {
    render(<CombinationFood />);
    
    const combinationFood = screen.getByTestId('CombinationFood');

    expect(combinationFood).toBeInTheDocument();
  });
});