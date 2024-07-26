import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';
import NewOrderAlert from '../../../components/dashboardCards/NewOrderAlert';
import TopSummary from '../../../components/dashboardCards/TopSummary';
import RecentOrders from '../../../components/dashboardCards/RecentOrders';
import NewUsers from '../../../components/dashboardCards/NewUsers';
import RecentProducts from '../../../components/dashboardCards/RecentProducts';
import DashboardCard from '../../../components/dashboardCards/DashboardCard';

// Mocking the imported components
jest.mock('../../../components/dashboardCards/NewOrderAlert', () => jest.fn(({ handleClose }) => (
  <div data-testid="NewOrderAlert">
    NewOrderAlert Mock
    <button onClick={handleClose}>Close</button>
  </div>
)));
jest.mock('../../../components/dashboardCards/TopSummary', () => jest.fn(() => <div data-testid="TopSummary">TopSummary Mock</div>));
jest.mock('../../../components/dashboardCards/RecentOrders', () => jest.fn(() => <div data-testid="RecentOrders">RecentOrders Mock</div>));
jest.mock('../../../components/dashboardCards/NewUsers', () => jest.fn(() => <div data-testid="NewUsers">NewUsers Mock</div>));
jest.mock('../../../components/dashboardCards/RecentProducts', () => jest.fn(() => <div data-testid="RecentProducts">RecentProducts Mock</div>));
jest.mock('../../../components/dashboardCards/DashboardCard', () => jest.fn(({ cardDetails }) => (
  <div data-testid={`DashboardCard-${cardDetails[0].id}`}>DashboardCard Mock</div>
)));

describe('Dashboard Component', () => {
  test('renders Dashboard component', () => {
    render(<Dashboard />);
    
    expect(screen.getByText("Welcome to Admin Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Here's what's happening with our hardware in summary.")).toBeInTheDocument();
  });

  test('renders NewOrderAlert component', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('NewOrderAlert')).toBeInTheDocument();
  });

  test('renders TopSummary component', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('TopSummary')).toBeInTheDocument();
  });

  test('renders RecentOrders component', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('RecentOrders')).toBeInTheDocument();
  });

  test('renders NewUsers component', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('NewUsers')).toBeInTheDocument();
  });

  test('renders RecentProducts component', () => {
    render(<Dashboard />);
    expect(screen.getByTestId('RecentProducts')).toBeInTheDocument();
  });

  test('renders all DashboardCard components', () => {
    render(<Dashboard />);
    for (let i = 1; i <= 6; i++) {
      expect(screen.getByTestId(`DashboardCard-${i}`)).toBeInTheDocument();
    }
  });

  test('closes NewOrderAlert when handleClose is called', () => {
    render(<Dashboard />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(screen.queryByTestId('NewOrderAlert')).not.toBeInTheDocument();
  });
});
