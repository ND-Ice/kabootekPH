import React, { useState } from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";

import { Icon } from "../";
import ColorPicker from "../ColorPicker";
import { AppForm, SubmitButton } from "../forms/formik";

export default function PresetEdit({ preset, onClose }) {
  const [showDark, setShowDark] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showAccent, setShowAccent] = useState(false);
  const [showActive, setShowActive] = useState(false);

  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <Wrapper>
      <Icon
        icon={FiXCircle}
        size={40}
        color="#F61767"
        className="close-icon"
        onClick={onClose}
      />
      <Title>Preset</Title>
      <AppForm
        initialValues={{
          dark: preset.colors.dark,
          light: preset.colors.light,
          accent: preset.colors.accent,
          active: preset.colors.active,
        }}
        onSubmit={handleSubmit}
      >
        <ContentWrapper>
          <PickerWrapper>
            Dark
            <ColorPicker
              name="dark"
              isOpen={showDark}
              onClose={() => setShowDark(false)}
              onPick={() => setShowDark(true)}
            />
          </PickerWrapper>
          <PickerWrapper>
            Light
            <ColorPicker
              name="light"
              isOpen={showLight}
              onClose={() => setShowLight(false)}
              onPick={() => setShowLight(true)}
            />
          </PickerWrapper>
          <PickerWrapper>
            Accent
            <ColorPicker
              name="accent"
              isOpen={showAccent}
              onClose={() => setShowAccent(false)}
              onPick={() => setShowAccent(true)}
            />
          </PickerWrapper>
          <PickerWrapper>
            Active
            <ColorPicker
              name="active"
              isOpen={showActive}
              onClose={() => setShowActive(false)}
              onPick={() => setShowActive(true)}
            />
          </PickerWrapper>
        </ContentWrapper>
        <SubmitButton className="save-btn">Save</SubmitButton>
      </AppForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 500px;
  font-size: 2rem;
  border-radius: 3rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  & .close-icon {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  & .save-btn {
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 0;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 2rem 4rem;
    transition: all 300ms ease;
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme.accent};

    &:hover {
      background-color: ${({ theme }) => theme.active};
    }
  }
`;

const Title = styled.h3`
  font-size: 3.6rem;
  font-weight: 700;
  text-align: center;
  margin: 2rem 0;
`;

const ContentWrapper = styled.div`
  padding: 0 4rem;
  display: grid;
  gap: 1rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const PickerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
`;
