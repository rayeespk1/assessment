import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Spinner from "../spinner";

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
});

test("loading correct data", () => {
    const { getByTestId, getByText } = render(<Spinner />);

    expect(getByTestId("loaderTag")).toHaveTextContent("Loading...");
    expect(getByText("Loading...")).toHaveClass("Loader");
});