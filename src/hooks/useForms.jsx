import { useState } from "react";

export const useForms = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };
  const handleInputChange = ({ target }) => {
    setValue({ ...value, [target.name]: target.value });
  };
  return [value, handleInputChange, reset];
};

// import {useState} from  "react";

// export const useForms = ({type} )=>{
// const [value, setValue] = useState("");

// const onChange = ({target:value}) =>{
//     setValue(value);
// }

// return{type, value ,onChange}
// }
