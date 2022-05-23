import React from "react";
import styled from "styled-components";

export default function ColorPIckerPlaceHolder({ color }) {
  return (
    <Wrapper>
      <Picker color={color} />
      {color}
    </Wrapper>
  );
}

const Picker = styled.div`
  background: ${({ color }) => color};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  color: #4b4b4b;
`;
