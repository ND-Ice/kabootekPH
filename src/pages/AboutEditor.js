import React, { useState } from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

import { Icon, Modal } from "../components";

import about_hero from "../images/about-hero.png";
import { AboutDescriptionEdit } from "../components/modals";

export default function AboutEditor() {
  const [showAboutDescriptionEdit, setShowAboutDescriptionEdit] =
    useState(false);
  return (
    <Page>
      <PageHeader>About</PageHeader>
      <Grid1x2>
        <div>
          <img src={about_hero} alt="" />
          <IconWrapper>
            <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
          </IconWrapper>
        </div>
        <PageDescription>
          KabootekPH INC, a tech company that was established on year 2019.
          Kabootek is one of the fastest growing company that specializes in
          mobile and web applications.{" "}
          <IconWrapper onClick={() => setShowAboutDescriptionEdit(true)}>
            <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
          </IconWrapper>
        </PageDescription>
      </Grid1x2>
      {/* modals */}
      <Modal
        isOpen={showAboutDescriptionEdit}
        onClose={() => setShowAboutDescriptionEdit(false)}
      >
        <AboutDescriptionEdit
          onClose={() => setShowAboutDescriptionEdit(false)}
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
`;

const PageHeader = styled.div`
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.dark};
`;

const Grid1x2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  padding: 5rem;
  gap: 5rem;
`;

const PageDescription = styled.p`
  line-height: 3rem;
  max-width: 40ch;
  color: ${({ theme }) => theme.dark};
`;

const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;
