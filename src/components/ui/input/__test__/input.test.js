import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react";
import Input from "../input";

afterEach(cleanup);

test("renders", () => {
    const elementConfig = {
        type: 'text',
        placeholder: 'Item Name'
    };
    const validation = {
        required: true
    }
    const { asFragment } = render(<Input
        elementType="input"
        elementConfig={elementConfig}
        value=""
        invalid={true}
        shouldValidate={validation}
        touched={false}
        changed={() => null} />);
    expect(asFragment()).toMatchSnapshot();
});