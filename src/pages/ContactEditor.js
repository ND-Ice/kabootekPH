import React from "react";
import styled from "styled-components";
import { ContactInformation } from "../components";

const contacts = [
  { title: "email", description: "info@kabootekphcom" },
  { title: "phone", description: "PH (+63) 9955080304" },
  {
    title: "address",
    description:
      "Unit 25-D, 2nd Floor, Zeta II Building, 191 Salcedo Street, Legaspi Village, San Lorenzo, 1223 City of Makati",
  },
];

export default function ContactEditor() {
  return (
    <Page>
      <PageHeader>Contact</PageHeader>
      <PageContent>
        {contacts.map((contact, index) => (
          <ContactInformation
            key={index}
            title={contact.title}
            description={contact.description}
          />
        ))}
      </PageContent>
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
`;

const PageHeader = styled.header`
  color: ${({ theme }) => theme.dark};
  margin-bottom: 5rem;
`;

const PageContent = styled.div`
  display: grid;
`;
