import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SingleExcursion from './SingleExcursion';

describe('<SingleExcursion />', () => {
  test('it should mount', () => {
    render(<SingleExcursion />);
    
    const singleExcursion = screen.getByTestId('SingleExcursion');

    expect(singleExcursion).toBeInTheDocument();
  });
});