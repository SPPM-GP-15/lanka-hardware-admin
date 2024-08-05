import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaArrowUpShortWide, FaArrowDownWideShort, FaUsers } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

// Mock components used in Dashboard
jest.mock("../../components/dashboardCards/RecentOrders", () => () => <div>RecentOrders Component</div>);
jest.mock("../../components/dashboardCards/TopSummary", () => () => <div>TopSummary Component</div>);
jest.mock("../../components/dashboardCards/NewUsers", () => () => <div>NewUsers Component</div>);
jest.mock("../../components/dashboardCards/RecentProducts", () => () => <div>RecentProducts Component</div>);
jest.mock("../../components/dashboardCards/NewOrderAlert", () => ({ isVisible, handleClose }) => (
  isVisible ? <div data-testid="alert">NewOrderAlert Component<button onClick={handleClose}>Close</button></div> : null
));

describe('Dashboard Component', () => {
  test('renders Dashboard component correctly', () => {
    render(<Dashboard />);
    expect(screen.getByText("Welcome to Admin Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Here's what's happening with our hardware in summary.")).toBeInTheDocument();
    expect(screen.getByText("RecentOrders Component")).toBeInTheDocument();
    expect(screen.getByText("TopSummary Component")).toBeInTheDocument();
    expect(screen.getByText("NewUsers Component")).toBeInTheDocument();
    expect(screen.getByText("RecentProducts Component")).toBeInTheDocument();
    expect(screen.getByTestId('alert')).toBeInTheDocument();
  });

  test('handles visibility of NewOrderAlert component', () => {
    render(<Dashboard />);
    const alert = screen.getByTestId('alert');
    expect(alert).toBeInTheDocument();

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(alert).not.toBeInTheDocument();
  });

  test('displays card details correctly', () => {
    render(<Dashboard />);
    const cardTitles = ["BUDGET", "TOTAL CUSTOMERS", "NEW ORDERS", "BUDGET", "TOTAL CUSTOMERS", "NEW ORDERS"];
    cardTitles.forEach(title => {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    });
  });
});
