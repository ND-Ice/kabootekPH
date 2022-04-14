import React from "react";
import styled from "styled-components";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import Icon from "./Icon";

export default function ColorPreset({ presetTitle }) {
  return (
    <PresetWrapper>
      {presetTitle}
      <PickerWrapper>
        <ColorPicker bg="#4B4B4B" />
        <ColorPicker bg="#ffffff" />
        <ColorPicker bg="#00BFA6" />
        <ColorPicker bg="#63C5B8" />
      </PickerWrapper>
      <ActionWrapper>
        <Icon icon={FaPencilAlt} color="#4b4b4b" />
        <Icon icon={FaTrashAlt} color="#4b4b4b" />
      </ActionWrapper>
    </PresetWrapper>
  );
}

const PresetWrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  padding: 2rem 5rem;
  align-items: center;
  justify-content: space-between;
  background: #f8f8f8;
`;

const PickerWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;

const ColorPicker = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  background: ${({ bg }) => bg};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ActionWrapper = styled.div`
  display: flex;
  gap: 5rem;
`;
