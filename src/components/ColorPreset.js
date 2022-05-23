import React from "react";
import styled from "styled-components";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

import { Button, Icon } from ".";
import { AppForm } from "./forms/formik";
import ColorPIckerPlaceHolder from "./ColorPIckerPlaceHolder";

export default function ColorPreset({ preset, onEdit, onDelete, onApply }) {
  return (
    <PresetWrapper>
      <Indicator isActive={preset.is_activated} />
      <AppForm
        initialValues={{
          dark_color: preset.dark_color,
          light_color: preset.light_color,
          accent_color: preset.accent_color,
          active_color: preset.active_color,
        }}
      >
        <PickerWrapper>
          <ColorPIckerPlaceHolder color={preset?.dark_color} />
          <ColorPIckerPlaceHolder color={preset?.light_color} />
          <ColorPIckerPlaceHolder color={preset?.accent_color} />
          <ColorPIckerPlaceHolder color={preset?.active_color} />
        </PickerWrapper>
        <ActionWrapper isActive={preset.is_activated}>
          <Icon icon={FaPencilAlt} color="#4b4b4b" onClick={onEdit} />
          <Icon
            className="delete-btn"
            icon={FaTrashAlt}
            color="#4b4b4b"
            onClick={onDelete}
          />
          <Button className="apply-btn" onClick={onApply}>
            Apply
          </Button>
        </ActionWrapper>
      </AppForm>
    </PresetWrapper>
  );
}

const PresetWrapper = styled.div`
  font-size: 1.6rem;
  display: flex;
  padding: 2rem 5rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 3rem;
  background: #f8f8f8;
`;

const PickerWrapper = styled.div`
  display: flex;
  gap: 10rem;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  & .apply-btn {
    padding: 1rem 2rem;
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    pointer-events: ${({ isActive }) => (isActive ? "none" : "all")};
  }

  & .delete-btn {
    opacity: ${({ isActive }) => (isActive ? 0 : 1)};
    pointer-events: ${({ isActive }) => (isActive ? "none" : "all")};
  }
`;

const Indicator = styled.div`
  width: 20px;
  height: 20px;
  background: #00ff19;
  border-radius: 50%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;
