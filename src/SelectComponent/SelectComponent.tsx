import React from "react";

import { SelectComponentProps } from "./SelectComponent.types";

import "./SelectComponent.scss"

const SelectComponent: React.FC<SelectComponentProps> = ({label, options, value, onChange, name}) => {
    return (
        <div className= "selectWrapper">
            {label && <label>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectComponent;