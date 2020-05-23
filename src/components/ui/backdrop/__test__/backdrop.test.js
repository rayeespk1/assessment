import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Backdrop from "../backdrop";

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Backdrop show={true} />);
    expect(asFragment()).toMatchSnapshot();
});

test("showing backdrop", () => {
    const { getByTestId } = render(<Backdrop show={true}/>);
    expect(getByTestId("backdropTag")).toHaveClass("Backdrop");
});