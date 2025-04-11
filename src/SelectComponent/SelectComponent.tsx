import React from "react";
import {SelectComponentProps} from "./SelectComponent.types";
import "./SelectComponent.scss";

const SelectComponent: React.FC<SelectComponentProps> = ({
                                                             label,
                                                             name,
                                                             options,
                                                             value,
                                                             onChange,
                                                             placeholder = "Select an option...",
                                                             multiple = false,
                                                             className = "",
                                                             style = {},
                                                             renderOption,
                                                         }) => {
    return (
        <div className={`selectWrapper ${className}`} style={style}>
            {label && <label htmlFor={name}>{label}</label>}
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                multiple={multiple}
                aria-label={label || name}
            >
                {/* Placeholder option */}
                {!multiple && placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}

                {/* Render options */}
                {options.map((option) =>
                    renderOption ? (
                        renderOption(option) // Custom rendering
                    ) : (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    )
                )}
            </select>
        </div>
    );
};

export default SelectComponent;
