import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaPencilAlt, FaPlusCircle } from "react-icons/fa";

import { DescriptionEdit, Icon } from "../components";
import { AboutDescriptionEdit, AboutImageEdit } from "../components/modals";

import { AboutContext } from "../context/AboutProvider";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import aboutApi from "../api/about";
import themeApi from "../api/theme";

import imagePlaceholder from "../images/image-placeholder.png";
import AboutDataAdd from "../components/modals/AboutDataAdd";

export default function AboutEditor() {
  const [showAboutData, setShowAboutData] = useState(false);
  const [showAboutDescriptionEdit, setShowAboutDescriptionEdit] =
    useState(false);
  const [showAboutImageEdit, setShowAboutImageEdit] = useState(false);
  const { aboutData, setAboutData } = useContext(AboutContext);
  const { setCustomTheme } = useContext(CustomThemeContext);

  useEffect(() => {
    getAboutData();
    getThemes();
  }, []);

  const getAboutData = async () => {
    try {
      const response = await aboutApi.getAboutData();
      setAboutData(response.data[0]);
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

  return (
    <Page>
      <FlexContainer>
        <PageHeader>About</PageHeader>
        {!aboutData && (
          <Icon
            icon={FaPlusCircle}
            size={40}
            onClick={() => setShowAboutData(true)}
          />
        )}
      </FlexContainer>
      <Grid1x2>
        {aboutData?.image ? (
          <div>
            <HeroImage src={aboutData?.image} alt="" />
            <IconWrapper>
              <Icon
                icon={FaPencilAlt}
                color="#4b4b4b"
                size={20}
                onClick={() => setShowAboutImageEdit(true)}
              />
            </IconWrapper>
          </div>
        ) : (
          <ImagePlaceholder src={imagePlaceholder} />
        )}
        {aboutData?.description ? (
          <DescriptionEdit onEdit={() => setShowAboutDescriptionEdit(true)}>
            {aboutData?.description}
          </DescriptionEdit>
        ) : (
          <Description>Description</Description>
        )}
      </Grid1x2>

      {/* modals */}
      <AboutDataAdd
        isOpen={showAboutData}
        onClose={() => setShowAboutData(false)}
      />
      <AboutDescriptionEdit
        isOpen={showAboutDescriptionEdit}
        onClose={() => setShowAboutDescriptionEdit(false)}
      />
      <AboutImageEdit
        isOpen={showAboutImageEdit}
        onClose={() => setShowAboutImageEdit(false)}
      />
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
  overflow-y: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const PageHeader = styled.div`
  color: ${({ theme }) => theme.dark_color};
`;

const Grid1x2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  min-height: 500px;
  gap: 5rem;
`;

const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;

const HeroImage = styled.img`
  width: 450px;
  height: 400px;
  object-fit: contain;
`;

const Description = styled.p`
  line-height: 3rem;
  max-width: 40ch;
  color: ${({ theme }) => theme.dark_color};
`;

const ImagePlaceholder = styled.img`
  width: 350px;
  height: 400px;
  object-fit: contain;
  border: 4px solid #a1a1a1;
  border-radius: 1rem;
`;
