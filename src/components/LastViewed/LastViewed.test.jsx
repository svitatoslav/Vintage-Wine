import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LastViewed from './LastViewed';

describe('<LastViewed />', () => {
  test('it should mount', () => {
    render(<LastViewed />);
    
    const lastViewed = screen.getByTestId('LastViewed');

    expect(lastViewed).toBeInTheDocument();
  });
});