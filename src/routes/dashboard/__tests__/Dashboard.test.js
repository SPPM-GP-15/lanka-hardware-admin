import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard.jsx";
import { MemoryRouter } from "react-router-dom";

test("render welcome to the admin dashbopard text", () => {
  render(
    <MemoryRouter>
      <Dashboard />
    </MemoryRouter>
  );

  const welocmeText = screen.getByText("Welcome to Admin Dashboard");
  expect(welocmeText).toBeInTheDocument();
});
