import React from 'react';
import './Inputfield.css';

export interface InputFieldProps {
  type: string;
}

const Inputfield = (props: InputFieldProps) => {
  return <input type={props.type} />;
};

export default Inputfield;
