import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchForm from './SearchForm';

describe('<SearchForm />', () => {
  test('it should mount', () => {
    render(<SearchForm />);
    
    const search = screen.getByTestId('Search');

    expect(search).toBeInTheDocument();
  });
});