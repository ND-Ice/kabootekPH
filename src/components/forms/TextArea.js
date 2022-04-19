import styled from "styled-components";
import React from "react";

export default function TextArea({ id, title, errors, ...otherProps }) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <CustomTextArea id={id} errors={errors} {...otherProps} />
    </>
  );
}

const CustomTextArea = styled("textarea")`
  width: 100%;
  min-height: 200px;
  margin: 1rem 0;
  border-radius: 1.5rem;
  padding: 1rem 1.5rem;
  outline: none;
  font-size: 2rem;
  resize: vertical;
  color: #4b4b4b;
  border: 2px solid ${({ errors }) => (errors ? "red" : "#4b4b4b")};

  &::placeholder {
    color: ${({ errors }) => (errors ? "red" : "#4b4b4b")};
  }
`;
