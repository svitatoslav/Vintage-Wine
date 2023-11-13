import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReservationModal from './ReservationModal';

describe('<ReservationModal />', () => {
  test('it should mount', () => {
    render(<ReservationModal />);
    
    const ReservationModal = screen.getByTestId('ReservationModal');

    expect(ReservationModal).toBeInTheDocument();
  });
});