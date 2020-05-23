import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Button from "../button";

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Button btnType="Success" />);
    expect(asFragment()).toMatchSnapshot();
});

test("showing backdrop", () => {
    const { getByTestId } = render(<Button btnType="Success" />);
    expect(getByTestId("buttonTag")).toHaveClass("Button Success");
});