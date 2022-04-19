import React, { useState } from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { Icon, Modal } from "../components";
import { FooterLinkEditor } from "../components/editor";
import {
  CommunityAdd,
  CommunityEdit,
  DeleteConfirmation,
  FollowAdd,
  FollowLinkEdit,
} from "../components/modals";

const communityLinks = [
  { title: "Support", href: "http://localhost:3000/footer/community" },
  { title: "Help", href: "http://localhost:3000/footer/help" },
];

const socialLinks = [
  { title: "Facebook", href: "http://localhost:3000/facebook" },
  { title: "Instagram", href: "http://localhost:3000/instagram" },
  { title: "Twitter", href: "http://localhost:3000/twitter" },
  { title: "Youtube", href: "http://localhost:3000/youtube" },
];

export default function FooterEditor() {
  const [showCommunityEdit, setShowCommunityEdit] = useState(false);
  const [showLinksEdit, setShowLinksEdit] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState({});
  const [selectedFollowLink, setSelectedFollowLink] = useState({});
  const [showCommunityAdd, setShowCommunityAdd] = useState(false);
  const [showFollowAdd, setShowFollowAdd] = useState(false);
  const [showFollowDelete, setShowFollowDelete] = useState(false);
  const [showCommunityDelete, setShowCommunityDelete] = useState(false);

  return (
    <Page>
      <PageHeader>Footer</PageHeader>
      <Grid1x2>
        <ContentWrapper>
          <FooterTitle>
            Community
            <Icon
              className="add-icon"
              icon={FiPlusCircle}
              onClick={() => setShowCommunityAdd(true)}
            />
          </FooterTitle>
          {communityLinks.map((link, index) => (
            <FooterLinkEditor
              key={index}
              title={link.title}
              onEdit={() => {
                setSelectedCommunity(link);
                setShowCommunityEdit(true);
              }}
              onDelete={() => {
                setShowCommunityDelete(true);
                setSelectedCommunity(link);
              }}
            />
          ))}
        </ContentWrapper>

        <ContentWrapper>
          <FooterTitle>
            Follow
            <Icon
              className="add-icon"
              icon={FiPlusCircle}
              onClick={() => setShowFollowAdd(true)}
            />
          </FooterTitle>
          {socialLinks.map((link, index) => (
            <FooterLinkEditor
              key={index}
              title={link.title}
              onEdit={() => {
                setShowLinksEdit(true);
                setSelectedFollowLink(link);
              }}
              onDelete={() => {
                setShowFollowDelete(true);
                setSelectedFollowLink(true);
              }}
            />
          ))}
        </ContentWrapper>
      </Grid1x2>

      {/* add modals */}
      <Modal isOpen={showFollowAdd} onClose={() => setShowFollowAdd(false)}>
        <FollowAdd onClose={() => setShowFollowAdd(false)} />
      </Modal>
      <Modal
        isOpen={showCommunityAdd}
        onClose={() => setShowCommunityAdd(false)}
      >
        <CommunityAdd onClose={() => setShowCommunityAdd(false)} />
      </Modal>

      {/* edit modals */}
      <Modal
        isOpen={showCommunityEdit}
        onClose={() => setShowCommunityEdit(false)}
      >
        <CommunityEdit
          community={selectedCommunity}
          onClose={() => setShowCommunityEdit(false)}
        />
      </Modal>
      <Modal isOpen={showLinksEdit} onClose={() => setShowLinksEdit(false)}>
        <FollowLinkEdit
          follow={selectedFollowLink}
          onClose={() => setShowLinksEdit(false)}
        />
      </Modal>

      {/* delete */}
      <Modal isOpen={showFollowDelete}>
        <DeleteConfirmation
          selected={selectedFollowLink}
          onCancel={() => setShowFollowDelete(false)}
        />
      </Modal>
      <Modal isOpen={showCommunityDelete}>
        <DeleteConfirmation
          selected={selectedFollowLink}
          onCancel={() => setShowCommunityDelete(false)}
        />
      </Modal>
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  background: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
`;

const PageHeader = styled.div`
  margin-bottom: 5rem;
`;

const Grid1x2 = styled.div`
  display: flex;
  justify-content: center;
`;

const FooterTitle = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  position: relative;

  .add-icon {
    position: absolute;
    margin-left: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 1rem;
  text-align: center;
  height: max-content;
  margin: 0 10rem;
`;
