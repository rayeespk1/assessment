import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Modal from "../modal";

afterEach(cleanup);

test("renders", () => {
    const { asFragment } = render(<Modal show={true}>
        <p>modal content</p>
    </Modal>);
    expect(asFragment()).toMatchSnapshot();
});

test("loading correct data", () => {
    const { getByText } = render(<Modal show={true}>
        <p className="modal-class">modal content</p>
    </Modal>);
    expect(getByText("modal content")).toHaveClass("modal-class");
});