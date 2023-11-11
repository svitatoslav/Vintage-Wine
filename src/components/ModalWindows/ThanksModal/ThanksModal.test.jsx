import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThanksModal from './ThanksModal';

describe('<ThanksModal />', () => {
  test('it should mount', () => {
    render(<ThanksModal />);
    
    const thanksModal = screen.getByTestId('ThanksModal');

    expect(thanksModal).toBeInTheDocument();
  });
});