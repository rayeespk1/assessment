import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Add from "../add";

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Add />);
    expect(asFragment()).toMatchSnapshot();
});

test("loading correct data", () => {
    const { getByTestId } = render(<Add />);
    expect(getByTestId("headingTag")).toHaveTextContent("Enter Item Details");
});