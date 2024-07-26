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
    expect(screen.getByText('Ahmed Anwer')).toBeInTheDocument();
    expect(screen.getByText('Kurunegela')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('22/07/2024')).toBeInTheDocument();
    expect(screen.getByText('Rs. 1000.00')).toBeInTheDocument();
    expect(screen.getAllByText('new')).toHaveLength(3);
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
