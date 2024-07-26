import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostProduct from './PostProduct';

describe('PostProduct Component', () => {
  test('renders PostProduct form correctly', () => {
    render(<PostProduct />);

    // Check if form headers and fields are rendered
    expect(screen.getByText('Fill in the item details to post')).toBeInTheDocument();
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Price')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Stock')).toBeInTheDocument();
    expect(screen.getByLabelText('Manufacturer')).toBeInTheDocument();
    expect(screen.getByText('Images')).toBeInTheDocument();
  });

  test('displays validation errors when fields are empty', () => {
    render(<PostProduct />);

    // Submit form without filling fields
    fireEvent.click(screen.getByText('Submit'));

    // Check for validation errors
    expect(screen.getByText('Title is required')).toBeInTheDocument();
    expect(screen.getByText('Description is required')).toBeInTheDocument();
    expect(screen.getByText('Price must be a positive number')).toBeInTheDocument();
    expect(screen.getByText('Category is required')).toBeInTheDocument();
    expect(screen.getByText('Stock must be a positive number')).toBeInTheDocument();
    expect(screen.getByText('Manufacturer is required')).toBeInTheDocument();
    expect(screen.getByText('At least one image is required')).toBeInTheDocument();
  });

  test('allows adding and selecting new categories', () => {
    render(<PostProduct />);

    // Check if new category input is shown when checkbox is selected
    const checkbox = screen.getByLabelText('Add new category');
    fireEvent.click(checkbox);

    expect(screen.getByPlaceholderText('Enter new category')).toBeInTheDocument();
    expect(screen.queryByLabelText('Category')).toBeNull();
  });

  test('uploads files and displays file names', () => {
    render(<PostProduct />);

    const fileInput = screen.getByLabelText('Click to upload or drag and drop');
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(screen.getByText('example.png')).toBeInTheDocument();
  });

  test('sets document title on render', () => {
    render(<PostProduct />);

    expect(document.title).toBe('Post Product | Lanka Hardwarehub');
  });
});
