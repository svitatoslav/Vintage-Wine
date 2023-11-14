import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateBox from './DateBox';

describe('<DateBox />', () => {
  test('it should mount', () => {
    render(<DateBox />);
    
    const dateBox = screen.getByTestId('DateBox');

    expect(dateBox).toBeInTheDocument();
  });
});