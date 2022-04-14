import React from "react";
import styled from "styled-components";

// component import
import { FooterLink, SocialLinks } from "..";

export default function Footer() {
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
        <SocialLinks />
      </UpperSection>

      {/* lower section */}
      <LowerSection>
        {/* legal section */}
        <LegalWrapper>
          <Header>Legal</Header>
          <FooterLink>Privacy Policy Terms & Condition</FooterLink>
        </LegalWrapper>

        {/* community section */}
        <CommunityWrapper>
          <Header>Community</Header>
          <FooterLink to="suppot">Support</FooterLink>
          <FooterLink to="help">Help</FooterLink>
        </CommunityWrapper>
        <CommunityWrapper />
      </LowerSection>
    </Container>
  );
}

const Container = styled("div")`
  margin-top: 10rem;
  background: #4b4b4b;
  min-height: 100vh;
  color: ${({ theme }) => theme.light};
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
