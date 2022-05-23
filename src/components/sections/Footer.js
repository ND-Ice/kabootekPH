import React, { useContext, useEffect } from "react";
import styled from "styled-components";

// component import
import { FooterLink, SocialLinks } from "..";
import { communityLinksLocal } from "../../utils/data";

import { SocialContext } from "../../context/SocialProvider";
import { CommunityContext } from "../../context/CommunityProvier";
import socialApi from "../../api/social";
import communityApi from "../../api/community";

export default function Footer() {
  const { socialLinks, setSocialLinks } = useContext(SocialContext);
  const { communityLinks, setCommunityLinks } = useContext(CommunityContext);

  useEffect(() => {
    getSocialLinks();
    getCommunityLinks();
  }, []);

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

  return (
    <Container>
      {/*  upper section */}
      <UpperSection>
        {/* wallet section */}
        <WalletWrapper>
          <Header>eWallet</Header>
          <WalletDescription>
            eWallet is a money transfer service that allows you to send money to
            anyone instantly, easily, and affordably.
          </WalletDescription>
        </WalletWrapper>

        {/* explore section */}
        <ExploreWrapper>
          <Header>Explore</Header>
          <FooterLink to="home">Home</FooterLink>
          <FooterLink to="services">Services</FooterLink>
          <FooterLink to="about">About</FooterLink>
          <FooterLink to="contact">Contact</FooterLink>
        </ExploreWrapper>

        {/* social link */}
        <SocialLinks links={socialLinks} />
      </UpperSection>

      {/* lower section */}
      <LowerSection>
        {/* legal section */}
        <LegalWrapper>
          <Header>Legal</Header>
          <FooterLink to="privacy">Privacy Policy Terms & Condition</FooterLink>
        </LegalWrapper>

        {/* community section */}
        <CommunityWrapper>
          <Header>Community</Header>
          {communityLinks?.length !== 0
            ? communityLinks?.map((link) => (
                <FooterLink key={link?.id} to={link?.href}>
                  {link?.title}
                </FooterLink>
              ))
            : communityLinksLocal?.map((link, index) => (
                <FooterLink key={index} to={link?.href}>
                  {link?.title}
                </FooterLink>
              ))}
        </CommunityWrapper>
        <CommunityWrapper />
      </LowerSection>
    </Container>
  );
}

const Container = styled("div")`
  margin-top: 10rem;
  background: ${({ theme }) => theme.dark_color};
  min-height: 100vh;
  color: ${({ theme }) => theme.light_color};
  padding: 1rem;
  display: grid;

  @media (min-width: 1240px) {
    padding: 10rem;
    gap: 3rem;
  }
`;

const Header = styled("h3")`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 5rem;
`;

const UpperSection = styled("div")`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1240px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const LowerSection = styled(UpperSection)``;

const WalletWrapper = styled("div")`
  margin-top: 5rem;
  max-width: 300px;
  height: max-content;

  @media (min-width: 1024px) {
    margin-top: 0;
    width: 300px;
  }
`;

const WalletDescription = styled("p")`
  font-size: 2rem;
  line-height: 40px;
`;

const LegalWrapper = styled(WalletWrapper)``;
const ExploreWrapper = styled(WalletWrapper)`
  display: grid;
`;
const CommunityWrapper = styled(ExploreWrapper)``;
