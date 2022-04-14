import React from "react";
import styled from "styled-components";
import { FooterLinkEditor } from "../components/editor";

export default function FooterEditor() {
  return (
    <Page>
      <PageHeader>Footer</PageHeader>
      <Grid1x2>
        <ContentWrapper>
          <FooterTitle>Community</FooterTitle>
          <FooterLinkEditor title="Support" />
          <FooterLinkEditor title="Help" />
        </ContentWrapper>

        <ContentWrapper>
          <FooterTitle>Follow</FooterTitle>
          <FooterLinkEditor title="Facebook" />
          <FooterLinkEditor title="Instagram" />
          <FooterLinkEditor title="Twitter" />
          <FooterLinkEditor title="Youtube" />
        </ContentWrapper>
      </Grid1x2>
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
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 1rem;
  text-align: center;
  height: max-content;
  margin: 0 10rem;
`;
