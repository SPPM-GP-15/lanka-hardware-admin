import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Orders from './Orders';

describe('Orders Component', () => {
  test('renders Orders component', () => {
    render(
      <Router>
        <Orders />
      </Router>
    );

    // Check if the title and headers are rendered
    expect(screen.getByText('Orders')).toBeInTheDocument();
    expect(screen.getByText('123 orders found')).toBeInTheDocument();
  });

  test('renders navigation links correctly', () => {
    render(
      <Router>
        <Orders />
      </Router>
    );

    // Check if navigation links are rendered
    expect(screen.getByText('All orders')).toBeInTheDocument();
    expect(screen.getByText('New orders')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  test('sets document title', () => {
    render(
      <Router>
        <Orders />
      </Router>
    );

    expect(document.title).toBe('Orders | Lanka Hardwarehub');
  });

  test('active link styling', () => {
    render(
      <Router>
        <Orders />
      </Router>
    );

    // Check if navigation links are not active initially
    const allOrdersLink = screen.getByText('All orders');
    const newOrdersLink = screen.getByText('New orders');
    const pendingLink = screen.getByText('Pending');
    const completedLink = screen.getByText('Completed');
    const cancelLink = screen.getByText('Cancel');

    // Verify no links have the active styling initially
    expect(allOrdersLink).not.toHaveClass('text-blue-400 border-b-2 border-blue-400');
    expect(newOrdersLink).not.toHaveClass('text-blue-400 border-b-2 border-blue-400');
    expect(pendingLink).not.toHaveClass('text-blue-400 border-b-2 border-blue-400');
    expect(completedLink).not.toHaveClass('text-blue-400 border-b-2 border-blue-400');
    expect(cancelLink).not.toHaveClass('text-blue-400 border-b-2 border-blue-400');
  });
});
