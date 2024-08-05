import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import New from './New';

describe('New Component', () => {
  test('renders New component', () => {
    render(<New />);

    // Check if the table headers are rendered
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Total Price')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('renders new order details correctly', () => {
    render(<New />);

    // Check if the order details are rendered
    const users = screen.getAllByText('Ahmed Anwer');
    const locations = screen.getAllByText('Kurunegela');
    const quantities = screen.getAllByText('10');
    const dates = screen.getAllByText('22/07/2024');
    const prices = screen.getAllByText('Rs. 1000.00');
    const statuses = screen.getAllByText('new');

    expect(users).toHaveLength(3);
    expect(locations).toHaveLength(3);
    expect(quantities).toHaveLength(3);
    expect(dates).toHaveLength(3);
    expect(prices).toHaveLength(3);
    expect(statuses).toHaveLength(3);
  });

  test('sets document title', () => {
    render(<New />);
    expect(document.title).toBe('New Orders | Lanka Hardwarehub');
  });

  test('renders pagination buttons', () => {
    render(<New />);

    // Check if pagination buttons are rendered
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
  });
});
