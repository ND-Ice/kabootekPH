import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { ContactInformation } from "../components";
import {
  AddressEdit,
  PhoneEdit,
  EmailEdit,
  ContactEmailAdd,
  ContactPhoneAdd,
  AddressAdd,
} from "../components/modals";

import { EmailContext } from "../context/EmailProvider";
import { PhoneContext } from "../context/PhoneProvider";
import { AddressContext } from "../context/AddressProvider";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import emailApi from "../api/email";
import phoneApi from "../api/phone";
import addressApi from "../api/address";
import themeApi from "../api/theme";

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

  const { emailData, setEmailData } = useContext(EmailContext);
  const { phoneData, setPhoneData } = useContext(PhoneContext);
  const { addressData, setAddressData } = useContext(AddressContext);
  const { setCustomTheme } = useContext(CustomThemeContext);

  useEffect(() => {
    getEmailData();
    getPhoneData();
    getAddressData();
    getThemes();
  }, []);

  const getEmailData = async () => {
    try {
      const response = await emailApi.getEmailData();
      setEmailData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPhoneData = async () => {
    try {
      const response = await phoneApi.getPhoneData();
      setPhoneData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddressData = async () => {
    try {
      const response = await addressApi.getAddressData();
      setAddressData(response.data);
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
      <PageHeader>Contact</PageHeader>
      <PageContent>
        <ContactInformation
          title="email"
          items={emailData}
          textProperty="email"
          onAdd={() => setShowEmailAdd(true)}
          onEdit={(email) => {
            setShowEmailEdit(true);
            setSelectedEmail(email);
          }}
        />
        <ContactInformation
          title="phone"
          items={phoneData}
          textProperty="phone"
          onAdd={() => setShowPhoneAdd(true)}
          onEdit={(phone) => {
            setShowPhoneEdit(true);
            setSelectedPhone(phone);
          }}
        />
        <ContactInformation
          title="address"
          items={addressData}
          textProperty="address"
          onAdd={() => setShowAddressAdd(true)}
          onEdit={(address) => {
            setShowAddressEdit(true);
            setSelectedAddress(address);
          }}
        />
      </PageContent>

      {/* add modals */}
      <ContactEmailAdd
        isOpen={showEmailAdd}
        onClose={() => setShowEmailAdd(false)}
      />
      <ContactPhoneAdd
        isOpen={showPhoneAdd}
        onClose={() => setShowPhoneAdd(false)}
      />
      <AddressAdd
        isOpen={showAddressAdd}
        onClose={() => setShowAddressAdd(false)}
      />

      {/* edit modals */}
      <EmailEdit
        isOpen={showEmailEdit}
        selected={selectedEmail}
        onClose={() => setShowEmailEdit(false)}
      />
      <PhoneEdit
        isOpen={showPhoneEdit}
        selected={selectedPhone}
        onClose={() => setShowPhoneEdit(false)}
      />
      <AddressEdit
        isOpen={showAddressEdit}
        selected={selectedAddress}
        onClose={() => setShowAddressEdit(false)}
      />
    </Page>
  );
}

const Page = styled.div`
  flex: 1;
  padding: 5rem;
  font-size: 2rem;
`;

const PageHeader = styled.header`
  color: ${({ theme }) => theme.dark_color};
  margin-bottom: 5rem;
`;

const PageContent = styled.div`
  display: grid;
`;
