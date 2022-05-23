import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaPencilAlt, FaPlusCircle } from "react-icons/fa";

import { DescriptionEdit, Icon } from "../components";
import {
  HomeEditDescription,
  HomeImageEdit,
  HomeTitleEdit,
} from "../components/modals";

import { HomeContext } from "../context/HomeProvider";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import homeApi from "../api/home";
import themeApi from "../api/theme";

import imagePlaceholder from "../images/image-placeholder.png";
import HomeDataAdd from "../components/modals/HomeDataAdd";

export default function HomeEditor() {
  const [showHomeAdd, setShowHomeAdd] = useState(false);
  const [showTitleEdit, setShowTitleEdit] = useState(false);
  const [showDescriptionEdit, setShowDescriptionEdit] = useState(false);
  const [showImageEdit, setShowImageEdit] = useState(false);
  const { homeData, setHomeData } = useContext(HomeContext);
  const { setCustomTheme } = useContext(CustomThemeContext);

  useEffect(() => {
    getHomeData();
    getThemes();
  }, []);

  const getHomeData = async () => {
    try {
      const response = await homeApi.getHomeData();
      setHomeData(response?.data[0]);
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
        <PageHeader>Home</PageHeader>
        {!homeData && (
          <Icon
            icon={FaPlusCircle}
            size={40}
            onClick={() => setShowHomeAdd(true)}
          />
        )}
      </FlexContainer>
      <Grid1x2>
        <div>
          {homeData?.title ? (
            <>
              <PageTitle>
                {homeData?.title}
                <IconWrapper onClick={() => setShowTitleEdit(true)}>
                  <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
                </IconWrapper>
              </PageTitle>
              <DescriptionEdit onEdit={() => setShowDescriptionEdit(true)}>
                {homeData?.description}
              </DescriptionEdit>
            </>
          ) : (
            <>
              <PageTitle> Heading</PageTitle>
              <Description>Description</Description>
            </>
          )}
        </div>

        {homeData?.image ? (
          <div>
            <HeroImage src={homeData?.image} alt="hero" />
            <IconWrapper onClick={() => setShowImageEdit(true)}>
              <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
            </IconWrapper>
          </div>
        ) : (
          <ImagePlaceholder src={imagePlaceholder} />
        )}
      </Grid1x2>

      {/* modals */}
      <HomeDataAdd isOpen={showHomeAdd} onClose={() => setShowHomeAdd(false)} />
      <HomeTitleEdit
        isOpen={showTitleEdit}
        onClose={() => setShowTitleEdit(false)}
      />
      <HomeEditDescription
        isOpen={showDescriptionEdit}
        onClose={() => setShowDescriptionEdit(false)}
      />
      <HomeImageEdit
        isOpen={showImageEdit}
        open={setShowImageEdit}
        onClose={() => setShowImageEdit(false)}
      />
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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const PageHeader = styled.header`
  color: ${({ theme }) => theme.dark_color};
`;

const Grid1x2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  min-height: 400px;
`;

const PageTitle = styled.h1`
  margin: 0;
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.dark_color};
`;

const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;

const HeroImage = styled.img`
  width: 500px;
  height: 500px;
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
