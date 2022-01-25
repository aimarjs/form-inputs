import React from 'react';

export interface InputFieldProps {
  type: string;
}

const Inputfield = (props: InputFieldProps) => {
  return <input type={props.type} />;
};

export default Inputfield;
