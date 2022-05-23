import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { ColorPreset, Icon } from "../components";
import {
  ApplyConfirmation,
  PresetEdit,
  PresetAdd,
  DeleteConfirmation,
} from "../components/modals";

import { CustomThemeContext } from "../context/CustomThemeProvider";
import themeApi from "../api/theme";
import toast from "react-hot-toast";

export default function ThemeEditor() {
  const { customTheme, setCustomTheme } = useContext(CustomThemeContext);
  const [selectedPreset, setSelectedPreset] = useState({});
  const [showApply, setShowApply] = useState(false);
  const [showPresetEdit, setShowPresetEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [applyingTheme, setApplyingTheme] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    getThemes();
  }, []);

  const handleDelete = async (id) => {
    try {
      setDeleting(true);
      const response = await themeApi.deleteTheme(id);
      setCustomTheme((prevTheme) =>
        prevTheme.filter((theme) => theme.id !== response?.data?.id)
      );
      setShowDelete(false);
      setDeleting(false);
      toast.success("Deleted Successfully.");
    } catch (error) {
      setShowDelete(false);
      setDeleting(false);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  const handlePresetApply = (selected) => {
    setSelectedPreset(selected);
    setShowApply(true);
  };

  const handlePresetEdit = (selected) => {
    setSelectedPreset(selected);
    setShowPresetEdit(true);
  };

  const handlePresetDelete = (selected) => {
    setSelectedPreset(selected);
    setShowDelete(true);
  };

  const getThemes = async () => {
    try {
      const response = await themeApi.getThemes();
      setCustomTheme(response?.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  const handleActivatePreset = async (id) => {
    try {
      setApplyingTheme(true);
      const response = await themeApi.activateTheme(id);
      setCustomTheme((prevState) =>
        prevState?.map((item) => {
          if (item?.is_activated) return { ...item, is_activated: false };
          if (item?.id === response?.data?.id)
            return { ...item, ...response?.data };
          return item;
        })
      );
      setApplyingTheme(false);
      setShowApply(false);
      toast.success("Applied Successfully.");
    } catch (error) {
      setApplyingTheme(false);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <Page>
      <PageHeader>
        Theme
        <Icon icon={FiPlusCircle} size={40} onClick={() => setShowAdd(true)} />
      </PageHeader>

      <PresetHeader>
        <PresetTitle>Dark</PresetTitle>
        <PresetTitle>Light</PresetTitle>
        <PresetTitle>Accent</PresetTitle>
        <PresetTitle>Active</PresetTitle>
      </PresetHeader>

      <PresetsContainer>
        {customTheme?.map((preset, index) => (
          <ColorPreset
            key={index}
            preset={preset}
            onApply={() => handlePresetApply(preset)}
            onEdit={() => handlePresetEdit(preset)}
            onDelete={() => handlePresetDelete(preset)}
          />
        ))}
      </PresetsContainer>

      {/* modals */}
      <PresetAdd isOpen={showAdd} onClose={() => setShowAdd(false)} />
      <PresetEdit
        isOpen={showPresetEdit}
        preset={selectedPreset}
        onClose={() => setShowPresetEdit(false)}
      />
      <ApplyConfirmation
        isOpen={showApply}
        loading={applyingTheme}
        selected={selectedPreset}
        onConfirm={handleActivatePreset}
        onCancel={() => setShowApply(false)}
      />
      <DeleteConfirmation
        loading={deleting}
        isOpen={showDelete}
        selected={selectedPreset}
        onDelete={handleDelete}
        onCancel={() => setShowDelete(false)}
      />
    </Page>
  );
}
const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  overflow-y: auto;
  color: ${({ theme }) => theme.dark_color};
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: space-between;
`;

const PresetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 11.5rem;
  margin-bottom: 2rem;
  margin-left: 17rem;
  text-align: center;
`;

const PresetTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0 1rem;
`;

const PresetsContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
