import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import { Icon } from "../components";
import { FooterLinkEditor } from "../components/editor";
import {
  CommunityAdd,
  CommunityEdit,
  DeleteConfirmation,
  FollowAdd,
  FollowLinkEdit,
} from "../components/modals";

import { CommunityContext } from "../context/CommunityProvier";
import { SocialContext } from "../context/SocialProvider";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import communityApi from "../api/community";
import socialApi from "../api/social";
import themeApi from "../api/theme";

export default function FooterEditor() {
  const [selectedCommunity, setSelectedCommunity] = useState({});
  const [selectedFollowLink, setSelectedFollowLink] = useState({});
  const [showCommunityEdit, setShowCommunityEdit] = useState(false);
  const [showFollowEdit, setShowFollowEdit] = useState(false);
  const [showCommunityAdd, setShowCommunityAdd] = useState(false);
  const [showFollowAdd, setShowFollowAdd] = useState(false);
  const [showFollowDelete, setShowFollowDelete] = useState(false);
  const [showCommunityDelete, setShowCommunityDelete] = useState(false);

  const { communityLinks, setCommunityLinks } = useContext(CommunityContext);
  const { socialLinks, setSocialLinks } = useContext(SocialContext);
  const { setCustomTheme } = useContext(CustomThemeContext);
  const [communityDeleting, setCommunityDeleting] = useState(false);
  const [socialLinkDeleting, setSocialLinkDeleting] = useState(false);

  useEffect(() => {
    getSocialLinks();
    getCommunityLinks();
    getThemes();
  }, []);

  const handleDeleteCommunity = (selected) => {
    setShowCommunityDelete(true);
    setSelectedCommunity(selected);
  };
  const handleEditCommunity = (selected) => {
    setShowCommunityEdit(true);
    setSelectedCommunity(selected);
  };
  const handleDeleteFollow = (selected) => {
    setShowFollowDelete(true);
    setSelectedFollowLink(selected);
  };
  const handleEditFollow = (selected) => {
    setShowFollowEdit(true);
    setSelectedFollowLink(selected);
  };

  const getSocialLinks = async () => {
    try {
      const response = await socialApi.getSocialLinks();
      setSocialLinks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCommunityLinks = async () => {
    try {
      const response = await communityApi.getCommunityLinks();
      setCommunityLinks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getThemes = async () => {
    try {
      const response = await themeApi.getThemes();
      setCustomTheme(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCommunityLinks = async (id) => {
    try {
      setCommunityDeleting(true);
      const response = await communityApi.deleteCommunityLinks(id);
      setCommunityLinks((prevState) =>
        prevState.filter((item) => item?.id !== response?.data?.id)
      );
      setCommunityDeleting(false);
      setShowCommunityDelete(false);
      toast.success("Deleted Successfully.");
    } catch (error) {
      setCommunityDeleting(false);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  const handleDeleteSocialLinks = async (id) => {
    try {
      setSocialLinkDeleting(true);
      const response = await socialApi.deleteSocialLinks(id);
      setSocialLinks((prevState) =>
        prevState.filter((item) => item?.id !== response?.data?.id)
      );
      setSocialLinkDeleting(false);
      setShowFollowDelete(false);
      toast.success("Deleted Successfully.");
    } catch (error) {
      setSocialLinkDeleting(false);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong please try again later."
      );
    }
  };

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
          {communityLinks?.map((link, index) => (
            <FooterLinkEditor
              key={index}
              title={link?.title}
              onEdit={() => handleEditCommunity(link)}
              onDelete={() => handleDeleteCommunity(link)}
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
              onEdit={() => handleEditFollow(link)}
              onDelete={() => handleDeleteFollow(link)}
            />
          ))}
        </ContentWrapper>
      </Grid1x2>

      {/* add modals */}
      <FollowAdd
        isOpen={showFollowAdd}
        onClose={() => setShowFollowAdd(false)}
      />
      <CommunityAdd
        isOpen={showCommunityAdd}
        onClose={() => setShowCommunityAdd(false)}
      />

      {/* edit modals */}
      <CommunityEdit
        isOpen={showCommunityEdit}
        selected={selectedCommunity}
        onClose={() => setShowCommunityEdit(false)}
      />
      <FollowLinkEdit
        isOpen={showFollowEdit}
        selected={selectedFollowLink}
        onClose={() => setShowFollowEdit(false)}
      />

      {/* delete Modals */}
      <DeleteConfirmation
        isOpen={showFollowDelete}
        selected={selectedFollowLink}
        loading={socialLinkDeleting}
        onDelete={handleDeleteSocialLinks}
        onCancel={() => setShowFollowDelete(false)}
      />
      <DeleteConfirmation
        isOpen={showCommunityDelete}
        selected={selectedCommunity}
        loading={communityDeleting}
        onDelete={handleDeleteCommunityLinks}
        onCancel={() => setShowCommunityDelete(false)}
      />
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  background: ${({ theme }) => theme.dark_color};
  color: ${({ theme }) => theme.light_color};
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
