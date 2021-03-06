import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import homeApi from "../../api/home";
import themeApi from "../../api/theme";
import { HomeContext } from "../../context/HomeProvider";
import { CustomThemeContext } from "../../context/CustomThemeProvider";

// image import
import hero_image from "../../images/hero_image.png";

export default function Homepage() {
  const { homeData, setHomeData } = useContext(HomeContext);
  const { setCustomTheme } = useContext(CustomThemeContext);

  useEffect(() => {
    getHomeData();
    getThemes();
  }, []);

  const getHomeData = async () => {
    try {
      const response = await homeApi.getHomeData();
      setHomeData(response.data[0]);
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
    <Container id="home" data-aos="fade-down" data-aos-duration="1000">
      <Curve
        width="100%"
        viewBox="0 0 1536 666"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1022.94 510.861C1180.8 610.408 1536 666 1536 666V0H0V132.617C0 132.617 569.598 44.7297 798.274 286.772C878.19 371.36 924.104 448.537 1022.94 510.861Z"
          fill-opacity="0.05"
        />
      </Curve>
      <div>
        <PageHeader>{homeData?.title || "eWallet Driven Company"}</PageHeader>
        <PageDescription>
          {homeData?.description ||
            "eWallet is a money transfer service that allows you to send money to anyone instantly, easily, and affordably."}
        </PageDescription>
      </div>
      <HeroImage src={homeData?.image || hero_image} alt="" />
    </Container>
  );
}

const Container = styled("div")`
  min-height: 100vh;
  padding: 1rem;
  text-align: center;
  display: grid;
  position: relative;
  padding-top: 10vh;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
    padding: 10rem;
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
    gap: 10rem;
    padding-top: 20rem;
  }
`;

const PageHeader = styled("h1")`
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  margin: 0;
  margin-bottom: 3rem;
  margin-top: 5rem;
  color: ${({ theme }) => theme.dark_color};

  @media (min-width: 1240px) {
    font-size: 8rem;
  }
`;

const PageDescription = styled("p")`
  font-size: 2rem;
  line-height: 3.6rem;
  margin: 0;
  color: ${({ theme }) => theme.dark_color};

  @media (min-width: 1240px) {
    font-size: 2.4rem;
  }
`;

const HeroImage = styled("img")`
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  margin-top: 2rem;
  object-fit: cover;
  position: relative;
  justify-self: end;
  z-index: 5;
`;

const Curve = styled("svg")`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  fill: ${({ theme }) => theme.accent_color};
`;
