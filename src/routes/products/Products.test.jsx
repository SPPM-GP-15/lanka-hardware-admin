import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Products from './Products';
import Product from '../../components/product/Product';

// Mock the Product component
jest.mock('../../components/product/Product', () => () => <div>Product Component</div>);

describe('Products Component', () => {
  test('sets document title on render', () => {
    render(<Products />);
    
    // Check if the document title is set correctly
    expect(document.title).toBe('Products | Lanka Hardwarehub');
  });
;
  test('renders Product component', () => {
    render(<Products />);
    
    // Check if the Product component is rendered
    expect(screen.getByText('Product Component')).toBeInTheDocument();
  });
});
