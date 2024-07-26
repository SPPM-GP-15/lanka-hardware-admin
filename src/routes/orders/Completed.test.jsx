// src/routes/products/Products.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from '../products/Products'; // Import the Products component

describe('Products Component', () => {
  test('renders Products component', () => {
    render(<Products />);

    // Check if the component is rendered correctly
    expect(screen.getByText('Products')).toBeInTheDocument(); // Replace 'Products' with text you expect in the component
  });

  test('sets document title', () => {
    render(<Products />);
    expect(document.title).toBe('Products | Lanka Hardwarehub'); // Replace with the correct title you expect
  });

  // Add additional tests for the Products component
  test('renders product details', () => {
    render(<Products />);
    
    // Replace with actual content you expect in the Products component
    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('Product Description')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  test('renders pagination buttons', () => {
    render(<Products />);

    // Check if pagination buttons are rendered
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '3' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '4' })).toBeInTheDocument();
  });
});
