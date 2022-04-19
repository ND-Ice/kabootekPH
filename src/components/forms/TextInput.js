import styled from "styled-components";

import React from "react";

export default function TextInput({ title, id, errors, ...otherProps }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <CustomInput id={id} errors={errors} {...otherProps} />
    </>
  );
}

const CustomInput = styled("input").attrs({ type: "input" })`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  margin: 1rem 0;
  outline: none;
  font-size: 2rem;
  color: #4b4b4b;
  border: 2px solid ${({ errors }) => (errors ? "red" : "#4b4b4b")};

  &::placeholder {
    color: ${({ errors }) => (errors ? "red" : "#4b4b4b")};
  }
`;
