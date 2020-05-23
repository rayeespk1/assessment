import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Item from "../item";

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Item id="1" title="head title" status="pending" changeStatus={null} />);
    expect(asFragment()).toMatchSnapshot();
});

test("loading correct data", () => {
    const { getByTestId, getByText } = render(<Item id="1" title="head title" status="pending" changeStatus={null} />);

    expect(getByTestId("titleTag")).toHaveTextContent("head title");
    expect(getByTestId("statusTag")).toHaveTextContent("pending");
    expect(getByTestId("outerTag")).toHaveClass("item pending");
});