import React from "react";
import Aside from "./Aside";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

describe('<Aside />', () => {
    test('it should mount', () => {
        render(<Aside />);

        const articleContent = screen.getByTestId('ArticleContent');

        expect(articleContent).toBeInTheDocument();
    });
});