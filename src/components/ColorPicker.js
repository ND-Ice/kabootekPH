import React from "react";
import styled from "styled-components";
import { ColorPicker as CustomPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { useFormikContext } from "formik";

import Modal from "./Modal";
import { ErrorMessage } from "./forms/formik";

export default function ColorPicker({ isOpen, onClose, name, onPick }) {
  const { values, errors, setFieldValue } = useFormikContext();
  const [color, setColor] = useColor("hex", values[name]);

  return (
    <>
      <ColorPickerWrapper>
        <Picker bg={color.hex} onClick={onPick} />
        {color.hex}
        <Modal isOpen={isOpen}>
          <PickerWrapper>
            <CustomPicker
              width={450}
              height={228}
              color={color}
              hideHSV
              onChange={setColor}
              onChangeComplete={(color) => setFieldValue(name, color.hex)}
            />
            <Button onClick={onClose}>Okay</Button>
          </PickerWrapper>
        </Modal>
      </ColorPickerWrapper>
      <ErrorMessage visible={errors[name]} errors={errors[name]} />
    </>
  );
}

const ColorPickerWrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  position: relative;
  width: 100px;
`;

const Picker = styled.div`
  width: 70px;
  height: 70px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PickerWrapper = styled.div`
  padding-top: 2rem;
  background: #ffffff;
  width: 500px;
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.accent};

  &:hover {
    background-color: ${({ theme }) => theme.active};
  }
`;
