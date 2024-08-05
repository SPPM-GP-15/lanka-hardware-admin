// PostProduct.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostProduct from "./PostProduct";

describe("PostProduct Component", () => {
  test("renders PostProduct form and submits data", () => {
    render(<PostProduct />);

    // Check if the form elements are rendered
    expect(screen.getByPlaceholderText("e.g. Hammer")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. 10.00")).toBeInTheDocument();
    expect(screen.getByText("Select a category")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. 100")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. ABC Manufacturing")).toBeInTheDocument();

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText("e.g. Hammer"), { target: { value: "Hammer" } });
    fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "A useful hammer" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. 10.00"), { target: { value: "10.00" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. 100"), { target: { value: "100" } });
    fireEvent.change(screen.getByPlaceholderText("e.g. ABC Manufacturing"), { target: { value: "ABC Manufacturing" } });

    // Select a category
    fireEvent.change(screen.getByText("Select a category"), { target: { value: "tools" } });

    // Simulate form submission
    fireEvent.click(screen.getByText("Submit"));

    // Assertions can be added here to check if submission logic works
    // For now, it will just ensure that the button click does not break the test
  });
});
