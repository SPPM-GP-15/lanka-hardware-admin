import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login';

describe('Login Component', () => {
  test('renders Login component', () => {
    render(<Login />);

    expect(screen.getByText('Welcome back')).toBeInTheDocument();
    expect(screen.getByText('Lanka Hardwarehub')).toBeInTheDocument();
  });

  test('renders input fields', () => {
    render(<Login />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  test('renders sign-in button', () => {
    render(<Login />);

    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
  });

  test('renders forgot password link', () => {
    render(<Login />);

    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  test('sets document title', () => {
    render(<Login />);
    expect(document.title).toBe('Login | Lanka Hardwarehub');
  });
});
