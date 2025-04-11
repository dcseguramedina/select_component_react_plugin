import React from "react";

export interface SelectComponentProps {
    label?: string; // Optional label for the select element
    name: string; // Name attribute for the select element
    options: {
        value: string; // Value for each option
        label: string; // Label for each option
    }[]; // Array of options
    value?: string | string[]; // Support single or multiple values (for multi-select)
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; // Change handler for the select element
    required?: boolean; // Optional flag to mark the field as required
    placeholder?: string; // Optional placeholder for single-select dropdowns
    multiple?: boolean; // Optional flag to enable multi-select functionality
    className?: string; // Optional custom class name for styling
    style?: React.CSSProperties; // Optional inline styles
    renderOption?: (option: { value: string; label: string }) => React.ReactNode; // Custom rendering logic for options
}
