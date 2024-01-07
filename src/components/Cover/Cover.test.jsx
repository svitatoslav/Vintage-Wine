import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cover from './Cover';

describe('<Cover />', () => {
  test('it should mount', () => {
    render(<Cover />);
    
    const cover = screen.getByTestId('Cover');

    expect(cover).toBeInTheDocument();
  });
});