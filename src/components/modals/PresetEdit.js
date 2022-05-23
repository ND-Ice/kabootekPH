import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";

import { Icon, Modal } from "../";
import ColorPicker from "../ColorPicker";
import { AppForm, ErrorMessage, SubmitButton } from "../forms/formik";

import { CustomThemeContext } from "../../context/CustomThemeProvider";
import themeApi from "../../api/theme";

export default function PresetEdit({ preset, onClose, ...otherProps }) {
  const [showDark, setShowDark] = useState(false);
  const [showLight, setShowLight] = useState(false);
  const [showAccent, setShowAccent] = useState(false);
  const [showActive, setShowActive] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { setCustomTheme } = useContext(CustomThemeContext);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await themeApi.updateTheme(values, preset?.id);
      setCustomTheme((prevState) =>
        prevState.map((item) =>
          item?.id === response?.data?.id
            ? { ...item, ...response?.data }
            : item
        )
      );
      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
    }
  };

  return (
    <Modal onClose={onClose} {...otherProps}>
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
            dark_color: preset?.dark_color,
            light_color: preset?.light_color,
            accent_color: preset?.accent_color,
            active_color: preset?.active_color,
          }}
          onSubmit={handleSubmit}
        >
          <ContentWrapper>
            <PickerWrapper>
              Dark
              <ColorPicker
                name="dark_color"
                isOpen={showDark}
                onClose={() => setShowDark(false)}
                onPick={() => setShowDark(true)}
              />
            </PickerWrapper>
            <PickerWrapper>
              Light
              <ColorPicker
                name="light_color"
                isOpen={showLight}
                onClose={() => setShowLight(false)}
                onPick={() => setShowLight(true)}
              />
            </PickerWrapper>
            <PickerWrapper>
              Accent
              <ColorPicker
                name="accent_color"
                isOpen={showAccent}
                onClose={() => setShowAccent(false)}
                onPick={() => setShowAccent(true)}
              />
            </PickerWrapper>
            <PickerWrapper>
              Active
              <ColorPicker
                name="active_color"
                isOpen={showActive}
                onClose={() => setShowActive(false)}
                onPick={() => setShowActive(true)}
              />
            </PickerWrapper>
            <ErrorMessage
              visible={errorMessage}
              errors={
                errorMessage?.response?.data?.message ||
                "Something went wrong. Please try again later."
              }
            />
          </ContentWrapper>
          <SubmitButton className="save-btn" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </SubmitButton>
        </AppForm>
      </Wrapper>
    </Modal>
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
    color: ${({ theme }) => theme.light_color};
    background-color: ${({ theme }) => theme.accent_color};

    &:hover {
      background-color: ${({ theme }) => theme.active_color};
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
