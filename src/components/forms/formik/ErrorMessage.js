import React from "react";
import styled from "styled-components";

export default function ErrorMessage({ visible, errors }) {
  if (!visible || !errors) return;
  return <Error>{errors}</Error>;
}

const Error = styled.div`
  color: red;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;
