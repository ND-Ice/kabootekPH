import React, { useRef } from "react";
import styled from "styled-components";
import { FaChevronCircleDown } from "react-icons/fa";

export default function ImagePicker() {
  const hiddenPickerRef = useRef();

  const handleClick = () => hiddenPickerRef.current.click();
  return (
    <PickerWrapper>
      <CustomPicker onClick={handleClick}>
        Select <FaChevronCircleDown />
      </CustomPicker>
      <input
        className="hidden-picker"
        ref={hiddenPickerRef}
        type="file"
        accept="image/*"
      />
    </PickerWrapper>
  );
}

const PickerWrapper = styled.div`
  color: ${({ theme }) => theme.dark};
  display: grid;
  place-items: center;

  .hidden-picker {
    display: none;
  }
`;

const CustomPicker = styled.div`
  display: flex;
  font-size: 2.4rem;
  padding: 2rem 3rem;
  margin: 3rem;
  gap: 2rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.dark};
`;
