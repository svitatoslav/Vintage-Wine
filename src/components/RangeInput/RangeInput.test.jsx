import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RangeInput from './RangeInput';

describe('<RangeInput />', () => {
  test('it should mount', () => {
    render(<RangeInput />);
    
    const rangeInput = screen.getByTestId('RangeInput');

    expect(rangeInput).toBeInTheDocument();
  });
});