import React from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { Icon } from "../components";
import { ServiceEditor } from "../components/editor";
import { services } from "../utils/data";

export default function ServicesEditor() {
  return (
    <Page>
      <Header>
        <PageTitle>Services</PageTitle>
        <Icon icon={FiPlusCircle} size={40} />
      </Header>

      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceEditor
            key={index}
            title={service.title}
            description={service.description}
            img={service.image}
          />
        ))}
      </ServicesContainer>
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  overflow-y: auto;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.dark};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const ServicesContainer = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  justify-content: center;
`;
