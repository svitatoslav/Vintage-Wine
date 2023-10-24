import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DropdownMenu from './DropdownMenu';

describe('<DropdownMenu />', () => {
  test('it should mount', () => {
    render(<DropdownMenu />);
    
    const dropdownMenu = screen.getByTestId('DropdownMenu');

    expect(dropdownMenu).toBeInTheDocument();
  });
});