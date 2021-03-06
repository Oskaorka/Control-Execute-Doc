import React from "react";
import PropTypes from "prop-types";
const FormField = ({
    name,
    value,
    onChange,
    styleInput,
    nameLabel,
    description,
    type
}) => {
    return (
        <div className="d-flex flex-column-reverse align-items-center m-2">
            <input
                className="p-1"
                style={styleInput}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={description}
            />
            <label
                style={{ fontSize: "20px", color: "grey" }}
                className="mb-3"
                htmlFor={name}
            >
                {nameLabel}
            </label>
        </div>
    );
};
FormField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    styleInput: PropTypes.object,
    nameLabel: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string
};
export default FormField;
