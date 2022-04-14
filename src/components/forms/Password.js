import styled from "styled-components";

import React from "react";

export default function Password({ title, id, ...otherProps }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <CustomPassword id={id} {...otherProps} />
    </>
  );
}

const CustomPassword = styled("input").attrs({ type: "password" })`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  margin: 1rem 0;
  border: 1px solid black;
  outline: none;
  font-size: 2rem;
`;
