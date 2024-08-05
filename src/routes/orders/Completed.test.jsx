// Completed.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Completed from "./Completed";

describe("Completed Component", () => {
  test("renders Completed component and updates document title", () => {
    render(<Completed />);

    // Check the document title
    expect(document.title).toBe("Completed Orders | Lanka Hardwarehub");

    // Check if the table is rendered
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Check if the headers are rendered
    const headers = ["User", "Location", "Qty", "Date", "Total Price", "Status"];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    // Check if a row is rendered with specific content
    expect(screen.getByText("Ahmed Anwer")).toBeInTheDocument();
    expect(screen.getByText("Kurunegela")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("22/07/2024")).toBeInTheDocument();
    expect(screen.getByText("Rs. 1000.00")).toBeInTheDocument();
    expect(screen.getByText("completed")).toBeInTheDocument();
  });
});
