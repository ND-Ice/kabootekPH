import React, { useState } from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

import hero_image from "../images/hero_image.png";
import { Icon, Modal } from "../components";
import {
  HomeEditDescription,
  HomeImageEdit,
  HomeTitleEdit,
} from "../components/modals";

export default function HomeEditor() {
  const [showTitleEdit, setShowTitleEdit] = useState(false);
  const [showDescriptionEdit, setShowDescriptionEdit] = useState(false);
  const [showImageEdit, setShowImageEdit] = useState(false);

  return (
    <Page>
      <PageHeader>Home</PageHeader>
      <Grid1x2>
        <div>
          <PageTitle>
            eWallet Driven Company
            <IconWrapper onClick={() => setShowTitleEdit(true)}>
              <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
            </IconWrapper>
          </PageTitle>
          <PageDescription>
            eWallet is a money transfer service that allows you to send money to
            anyone instantly, easily, and affordably.
            <IconWrapper onClick={() => setShowDescriptionEdit(true)}>
              <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
            </IconWrapper>
          </PageDescription>
        </div>
        <HeroImageWrapper>
          <img src={hero_image} alt="hero-image" />
          <IconWrapper onClick={() => setShowImageEdit(true)}>
            <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
          </IconWrapper>
        </HeroImageWrapper>
      </Grid1x2>

      {/* modals */}
      <Modal isOpen={showTitleEdit} onClose={() => setShowTitleEdit(false)}>
        <HomeTitleEdit onClose={() => setShowTitleEdit(false)} />
      </Modal>

      <Modal
        isOpen={showDescriptionEdit}
        onClose={() => setShowDescriptionEdit(false)}
      >
        <HomeEditDescription onClose={() => setShowDescriptionEdit(false)} />
      </Modal>

      <Modal isOpen={showImageEdit} onClose={() => setShowImageEdit(false)}>
        <HomeImageEdit onClose={() => setShowImageEdit(false)} />
      </Modal>
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  overflow-y: auto;
  position: relative;
`;

const PageHeader = styled.header`
  color: ${({ theme }) => theme.dark};
`;

const Grid1x2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.dark};
`;

const PageDescription = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  max-width: 40ch;
  display: inline-block;
  vertical-align: middle;
  color: ${({ theme }) => theme.dark};
`;

const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;

const HeroImageWrapper = styled.div``;
