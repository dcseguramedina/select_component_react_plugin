import React from "react";

export interface SelectComponentProps {
    label?: string;
    name: string;
    options:
        {
            value: string,
            label: string
        } []

    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
}
