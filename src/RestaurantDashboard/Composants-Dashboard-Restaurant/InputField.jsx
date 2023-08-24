import React, { useState } from "react";

const InputField = (props) => {
  const [focus, setFocus] = useState(true);
  const [filled, setFilled] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setFilled(inputValue.length > 0);
    setValue(inputValue);
    event.preventDefault()
    props.newval(event.target.value);
  };


  return (
    <div
      className={`input-field ${focus ? "focus" : ""} ${
        filled ? "filled" : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(event) => handleChange(event)}
        value={props.val}
      />
    </div>
  );
};

export default InputField;
