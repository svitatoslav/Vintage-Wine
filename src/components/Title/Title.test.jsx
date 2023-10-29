import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageTitle from "./PageTitle";
import SectionTitle from "./SectionTitle";
import SubTitle from "./SubTitle";

describe('<h1 />', () => {
    test('it should mount', () => {
        render(<PageTitle />);

        const pageTitle = screen.getByTestId('PageTitle');

        expect(pageTitle).toBeInTheDocument();
    });
});

describe('<h3 />', () => {
    test('it should mount', () => {
        render(<SectionTitle />);

        const sectionTitle = screen.getByTestId('SectionTitle');

        expect(title).toBeInTheDocument();
    });
});
describe('<h3 />', () => {
    test('it should mount', () => {
        render(<SubTitle />);

        const subTitle = screen.getByTestId('SubTitle');

        expect(subTitle).toBeInTheDocument();
    });
});
