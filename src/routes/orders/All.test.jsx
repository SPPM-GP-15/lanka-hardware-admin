import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import All from './All';

describe('All Component', () => {
  test('renders All component', () => {
    render(<All />);

    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Total Price')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  test('renders order details correctly', () => {
    render(<All />);

    expect(screen.getByText('Ahmed Anwer')).toBeInTheDocument();
    expect(screen.getByText('Kurunegela')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('22/07/2024')).toBeInTheDocument();
    expect(screen.getByText('Rs. 1000.00')).toBeInTheDocument();
    expect(screen.getByText('active')).toBeInTheDocument();
  });

  test('sets document title', () => {
    render(<All />);
    expect(document.title).toBe('All Orders | Lanka Hardwarehub');
  });

  test('renders pagination buttons', () => {
    render(<All />);

    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
  });
});
