import React from "react";
import styled from "styled-components";

export default function CheckBox({ title, id, ...otherProps }) {
  return (
    <Wrapper>
      <CustomCheck type="checkbox" id={id} {...otherProps} />
      <label htmlFor={id}>{title}</label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CustomCheck = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;
