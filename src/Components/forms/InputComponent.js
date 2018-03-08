import React from 'react';
const InputComponent = ({onChange, label, inputValue, placeholder}) => {

  return (
  <div>
    <label htmlFor={label}>{label}</label>
    <input type="text"
           name={label}
           className="form-control"
           placeholder={placeholder}
           value={inputValue}
           onChange={onChange}
    />
  </div>
  )
};

export default  InputComponent;