import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterGroup from './FilterGroup';

describe('<FilterGroup />', () => {
  test('it should mount', () => {
    render(<FilterGroup />);
    
    const filterGroup = screen.getByTestId('FilterGroup');

    expect(filterGroup).toBeInTheDocument();
  });
});