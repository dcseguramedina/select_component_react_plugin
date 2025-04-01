import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SelectComponent from "./SelectComponent";
import { SelectComponentProps } from "./SelectComponent.types";

describe("Select Component", () => {
    let props: SelectComponentProps;

    beforeEach(() => {
        props = {
            label: "Select an option",
            name: "select",
            options: [
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
            ],
            value: "option1",
            onChange: jest.fn(), // Mock function for testing
        };
    });

    it("should render the label and options correctly", () => {
        const { getByLabelText, getByText } = render(<SelectComponent {...props} />);

        // Check if the label is rendered
        const labelElement = getByLabelText(props.label); // Finds the <label> associated with the select
        expect(labelElement).toHaveTextContent("Select an option");

        // Check if the options are rendered
        props.options.forEach((option) => {
            const optionElement = getByText(option.label); // Finds each option by its label
            expect(optionElement).toHaveTextContent(option.label);
        });
    });

    it("should call onChange when a different option is selected", () => {
        const { getByLabelText } = render(<SelectComponent {...props} />);

        const selectElement = getByLabelText(props.label);

        // Simulate changing the value of the select element
        fireEvent.change(selectElement, { target: { value: "option2" } });

        // Verify that the onChange handler was called with the correct value
        expect(props.onChange).toHaveBeenCalledWith(expect.anything());
    });
});
