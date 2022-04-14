import React from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { ColorPreset, Icon } from "../components";

export default function ThemeEditor() {
  return (
    <Page>
      <PageHeader>
        Theme <Icon icon={FiPlusCircle} size={40} />
      </PageHeader>
      <PresetsContainer>
        <ColorPreset presetTitle="default" />
        <ColorPreset presetTitle="preset 1" />
        <ColorPreset presetTitle="preset 2" />
      </PresetsContainer>
    </Page>
  );
}
const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.dark};
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const PresetsContainer = styled.div`
  display: grid;
  gap: 1rem;
`;
