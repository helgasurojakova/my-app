import './UI.css';
import React, {useState} from 'react';

type Params = {
    title: string;
    type: string;
    value: string | number;
    placeholder: string;
    onChange: any;
}

function Input(props:Params) {
  return (
    <div className="input">
        <span className="input__label">{props.title}</span>
        <input value={props.value || ''} onChange={props.onChange} className="input__field" type={props.type} placeholder={props.placeholder}></input>
    </div>
  );
}

export default Input;