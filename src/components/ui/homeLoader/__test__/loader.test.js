import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from "@testing-library/react";
import Loading from '../loader';

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
});

test("loading correct data", () => {
    const { getByTestId, getByText } = render(<Loading />);
    expect(getByTestId("loadingTag")).toHaveTextContent("Loading...");
    expect(getByTestId("logoTag")).toHaveClass("zoom-ani");
});