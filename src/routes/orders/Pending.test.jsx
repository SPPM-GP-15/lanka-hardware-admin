import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pending from './Pending';

describe('Pending Component', () => {
  test('renders Pending component', () => {
    render(<Pending />);

    // Check if the title and headers are rendered
    expect(screen.getByText('Pending Orders')).toBeInTheDocument();
  });

  test('renders table headers and row', () => {
    render(<Pending />);

    // Check if table headers are rendered
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Total Price')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();

    // Check if table row data is rendered
    expect(screen.getByText('Ahmed Anwer')).toBeInTheDocument();
    expect(screen.getByText('Kurunegela')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('22/07/2024')).toBeInTheDocument();
    expect(screen.getByText('Rs. 1000.00')).toBeInTheDocument();
    expect(screen.getByText('active')).toBeInTheDocument();
  });

  test('sets document title', () => {
    render(<Pending />);

    expect(document.title).toBe('Pending Orders | Lanka Hardwarehub');
  });
});
