import React, { useState } from "react";
import styled from "styled-components";

import { ContactInformation, Modal } from "../components";
import {
  AddressEdit,
  PhoneEdit,
  EmailEdit,
  ContactEmailAdd,
  ContactPhoneAdd,
  AddressAdd,
} from "../components/modals";

const emails = [
  { title: "delacruzjoshua691@gmail.com" },
  { title: "info@kabootekph.com" },
];
const phones = [{ title: "PH (+63) 9662048118" }];
const addresses = [
  {
    title:
      "Unit 25-D, 2nd Floor, Zeta II Building, 191 Salcedo Street, Legaspi Village, San Lorenzo, 1223 City of Makati",
  },
];

export default function ContactEditor() {
  const [showEmailEdit, setShowEmailEdit] = useState(false);
  const [showPhoneEdit, setShowPhoneEdit] = useState(false);
  const [showAddressEdit, setShowAddressEdit] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState({});
  const [selectedPhone, setSelectedPhone] = useState({});
  const [selectedAddress, setSelectedAddress] = useState({});
  const [showEmailAdd, setShowEmailAdd] = useState(false);
  const [showPhoneAdd, setShowPhoneAdd] = useState(false);
  const [showAddressAdd, setShowAddressAdd] = useState(false);

  return (
    <Page>
      <PageHeader>Contact</PageHeader>
      <PageContent>
        <ContactInformation
          title="email"
          items={emails}
          onAdd={() => setShowEmailAdd(true)}
          onEdit={(email) => {
            setShowEmailEdit(true);
            setSelectedEmail(email);
          }}
        />
        <ContactInformation
          title="phone"
          items={phones}
          onAdd={() => setShowPhoneAdd(true)}
          onEdit={(phone) => {
            setShowPhoneEdit(true);
            setSelectedPhone(phone);
          }}
        />
        <ContactInformation
          title="address"
          items={addresses}
          onAdd={() => setShowAddressAdd(true)}
          onEdit={(address) => {
            setShowAddressEdit(true);
            setSelectedAddress(address);
          }}
        />
      </PageContent>
      {/* add modals */}
      <Modal isOpen={showEmailAdd} onClose={() => setShowEmailAdd(false)}>
        <ContactEmailAdd onClose={() => setShowEmailAdd(false)} />
      </Modal>
      <Modal isOpen={showPhoneAdd} onClose={() => setShowPhoneAdd(false)}>
        <ContactPhoneAdd onClose={() => setShowPhoneAdd(false)} />
      </Modal>
      <Modal isOpen={showAddressAdd} onClose={() => setShowAddressAdd(false)}>
        <AddressAdd onClose={() => setShowAddressAdd(false)} />
      </Modal>

      {/* edit modals */}
      <Modal isOpen={showEmailEdit} onClose={() => setShowEmailEdit(false)}>
        <EmailEdit
          email={selectedEmail}
          onClose={() => setShowEmailEdit(false)}
        />
      </Modal>
      <Modal isOpen={showPhoneEdit} onClose={() => setShowPhoneEdit(false)}>
        <PhoneEdit
          phone={selectedPhone}
          onClose={() => setShowPhoneEdit(false)}
        />
      </Modal>
      <Modal isOpen={showAddressEdit} onClose={() => setShowAddressEdit(false)}>
        <AddressEdit
          address={selectedAddress}
          onClose={() => setShowAddressEdit(false)}
        />
      </Modal>
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
