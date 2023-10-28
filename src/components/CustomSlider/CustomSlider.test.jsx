import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomSlider from './CustomSlider';

describe('<CustomSlider />', () => {
  test('it should mount', () => {
    render(<CustomSlider />);
    
    const customSlider = screen.getByTestId('CustomSlider');

    expect(customSlider).toBeInTheDocument();
  });
});