import styled from "styled-components";

import React from "react";

export default function TextInput({ title, id, ...otherProps }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <CustomInput id={id} {...otherProps} />
    </>
  );
}

const CustomInput = styled("input").attrs({ type: "input" })`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  margin: 1rem 0;
  border: 1px solid black;
  outline: none;
  font-size: 2rem;
`;
