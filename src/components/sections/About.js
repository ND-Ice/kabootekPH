import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { AboutContext } from "../../context/AboutProvider";
import aboutApi from "../../api/about";

// image import
import about_hero from "../../images/about-hero.png";

export default function About() {
  const { aboutData, setAboutData } = useContext(AboutContext);

  useEffect(() => {
    getAboutData();
  }, []);

  const getAboutData = async () => {
    try {
      const response = await aboutApi.getAboutData();
      setAboutData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container id="about">
      <Curve
        width="100%"
        viewBox="0 0 1536 666"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M513.062 155.139C355.2 55.592 0 -0.000134281 0 -0.000134281L-5.82236e-05 666L1536 666L1536 533.383C1536 533.383 966.402 621.27 737.726 379.228C657.809 294.64 611.896 217.463 513.062 155.139Z"
          fill-opacity="0.05"
        />
      </Curve>
      <PageHeader data-aos="fade-down" data-aos-duration="1000">
        About
      </PageHeader>

      <Grid1x2>
        <HeroImage
          src={aboutData?.image || about_hero}
          alt=""
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <PageDescription data-aos="fade-left" data-aos-duration="1000">
          {aboutData?.description ||
            "KabootekPH INC, a tech company that was established on year 2019. Kabootek is one of the fastest growing company that specializes in mobile and web applications."}
        </PageDescription>
      </Grid1x2>
    </Container>
  );
}

const Container = styled("div")`
  padding: 1rem;
  min-height: 100vh;
  text-align: center;
  position: relative;

  & > * {
    position: relative;
    z-index: 5;
  }

  @media (min-width: 900px) {
    padding: 10rem;
  }
`;

const Grid1x2 = styled("div")`
  display: grid;
  gap: 2rem;
  align-items: center;
  justify-items: center;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroImage = styled("img")`
  width: 100%;
  max-width: 470px;
  max-height: 325px;
`;

const PageHeader = styled("h2")`
  font-size: 3.2rem;
  margin-bottom: 10rem;
  color: ${({ theme }) => theme.dark_color};
`;

const PageDescription = styled("p")`
  font-size: 2.4rem;
  max-width: 33ch;
  margin-bottom: 10rem;
  color: ${({ theme }) => theme.dark_color};

  @media (min-width: 720px) {
    text-align: left;
  } ;
`;

const Curve = styled("svg")`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  fill: ${({ theme }) => theme.accent_color};
`;
