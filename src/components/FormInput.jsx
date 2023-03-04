import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
const {label,onChange,errorMessage,id,...inputProps}=props

  return (
    <div className="formInput">
      <label>Username</label>
      {/* <input
        placeholder={props.placeholder}
        onChange={(e) => props.setUsername(e.target.value)} />*/}
        {/* <input ref={props.refer} placeholder={props.placeholder}/> */}
        {/* <input name={props.name} placeholder={props.placeholder}/>  */}
        <label>{label}</label>
        <input {...inputProps} onChange={onChange}/>
        <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
