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
}) => {
  return (
    <div>
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
        required
      />
      <div className="invalid-feedback">{invalidText}</div>
    </div>
  );
};

TextInput.defaultProps = {
  type: "text",
};

export default TextInput;
