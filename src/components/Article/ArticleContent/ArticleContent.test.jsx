import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleContent from './ArticleContent';

describe('<ArticleContent />', () => {
  test('it should mount', () => {
    render(<ArticleContent />);
    
    const articleContent = screen.getByTestId('ArticleContent');

    expect(articleContent).toBeInTheDocument();
  });
});