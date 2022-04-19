import React, { useState } from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { ColorPreset, Icon, Modal } from "../components";
import {
  ApplyConfirmation,
  PresetEdit,
  PresetAdd,
  DeleteConfirmation,
} from "../components/modals";

const presets = [
  {
    isActive: true,
    colors: {
      light: "#ffffff",
      dark: "#4b4b4b",
      accent: "#00BFA6",
      active: "#63C5B8",
    },
  },
  {
    isActive: false,
    colors: {
      light: "#ffffff",
      dark: "#4b4b4b",
      accent: "#00BFA6",
      active: "#63C5B8",
    },
  },
  {
    isActive: false,
    colors: {
      light: "#ffffff",
      dark: "#4b4b4b",
      accent: "#00BFA6",
      active: "#63C5B8",
    },
  },
];

export default function ThemeEditor() {
  const [showApply, setShowApply] = useState(false);
  const [showPresetEdit, setShowPresetEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState({});

  const handleDelete = (id) => {
    setShowDelete(false);
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
        <PresetTitle className="header--active">Active</PresetTitle>
      </PresetHeader>
      <PresetsContainer>
        {presets.map((preset, index) => (
          <ColorPreset
            key={index}
            preset={preset}
            onApply={() => {
              setShowApply(true);
              setSelectedPreset(preset);
            }}
            onEdit={() => {
              setShowPresetEdit(true);
              setSelectedPreset(preset);
            }}
            onDelete={() => {
              setShowDelete(true);
              setSelectedPreset(preset);
            }}
          />
        ))}
      </PresetsContainer>

      {/* modals */}
      <Modal isOpen={showApply}>
        <ApplyConfirmation
          selected={selectedPreset}
          onConfirm={() => setShowApply(false)}
          onCancel={() => setShowApply(false)}
        />
      </Modal>
      <Modal isOpen={showPresetEdit} onClose={() => setShowPresetEdit(false)}>
        <PresetEdit
          preset={selectedPreset}
          onClose={() => setShowPresetEdit(false)}
        />
      </Modal>
      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)}>
        <PresetAdd onClose={() => setShowAdd(false)} />
      </Modal>
      <Modal isOpen={showDelete}>
        <DeleteConfirmation
          selected={selectedPreset}
          onDelete={handleDelete}
          onCancel={() => setShowDelete(false)}
        />
      </Modal>
    </Page>
  );
}
const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  overflow-y: auto;
  color: ${({ theme }) => theme.dark};
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
  gap: 13.5rem;
  margin-bottom: 2rem;
  margin-left: 14.5rem;
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
