import React from "react";

const TextInput = ({
  id,
  label,
  invalid,
  type,
  value,
  invalidText,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className={`form-control ${invalid ? "is-invalid" : ""}`}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
      />
      <div className="invalid-feedback">{invalidText}</div>
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
  required: true,
};

export default TextInput;
