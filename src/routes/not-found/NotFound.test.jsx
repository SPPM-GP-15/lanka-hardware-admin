import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound Component', () => {
  test('renders NotFound component', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByText('Sorry, the page you are looking for could not be found.')).toBeInTheDocument();
  });

  test('renders Return Home link', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    const link = screen.getByRole('link', { name: /Return Home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/dashboard');
  });

  test('sets document title', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(document.title).toBe('Page Not Found | Lanka Hardwarehub');
  });

  test('renders image with correct src', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png');
  });
});
