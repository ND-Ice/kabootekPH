import React, { useState } from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { Icon, Modal } from "../components";
import { ServiceEditor } from "../components/editor";
import { services } from "../utils/data";
import {
  DeleteConfirmation,
  ServiceAdd,
  ServiceEdit,
} from "../components/modals";

export default function ServicesEditor() {
  const [showDelete, setShowDelete] = useState(false);
  const [showServiceEdit, setShowServiceEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState({});

  const handleDelete = (id) => {
    setShowDelete(false);
  };

  return (
    <Page>
      <Header>
        <PageTitle>Services</PageTitle>
        <Icon icon={FiPlusCircle} size={40} onClick={() => setShowAdd(true)} />
      </Header>

      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceEditor
            key={index}
            title={service.title}
            description={service.description}
            img={service.image}
            onEdit={() => {
              setShowServiceEdit(true);
              setSelected(service);
            }}
            onDelete={() => {
              setShowDelete(true);
              setSelected(service);
            }}
          />
        ))}
      </ServicesContainer>
      {/* add modals */}
      <Modal isOpen={showAdd} onClose={() => setShowAdd(false)}>
        <ServiceAdd onClose={() => setShowAdd(false)} />
      </Modal>

      {/* edit modals */}
      <Modal isOpen={showDelete}>
        <DeleteConfirmation
          selected={selected}
          onDelete={handleDelete}
          onCancel={() => setShowDelete(false)}
        />
      </Modal>
      <Modal isOpen={showServiceEdit} onClose={() => setShowServiceEdit(false)}>
        <ServiceEdit
          service={selected}
          onClose={() => setShowServiceEdit(false)}
        />
      </Modal>
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
