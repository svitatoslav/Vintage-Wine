import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filtration from './Filtaration';
 

describe('Filtration', () => {
    test('it should mount', () => {
        render(<Filtration />);

        const filtration = screen.getByTestId('Filtration');

        expect(filtration).toBeInTheDocument();
    });
});