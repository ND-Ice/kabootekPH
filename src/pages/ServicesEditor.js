import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FiPlusCircle } from "react-icons/fi";

import { Icon } from "../components";
import { ServiceEditor } from "../components/editor";
import {
  DeleteConfirmation,
  ServiceAdd,
  ServiceEdit,
} from "../components/modals";

import { ServicesContext } from "../context/ServicesProvider";
import { CustomThemeContext } from "../context/CustomThemeProvider";
import servicesApi from "../api/services";
import themeApi from "../api/theme";
import toast from "react-hot-toast";

export default function ServicesEditor() {
  const { servicesData, setServicesData } = useContext(ServicesContext);
  const { setCustomTheme } = useContext(CustomThemeContext);
  const [showDelete, setShowDelete] = useState(false);
  const [showServiceEdit, setShowServiceEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getServicesData();
    getThemes();
  }, []);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await servicesApi.deleteService(id);
      setServicesData(
        servicesData?.filter((service) => service?.id !== response?.data?.id)
      );
      setLoading(false);
      setShowDelete(false);
      toast.success("Deleted successfully.");
    } catch (error) {
      setLoading(false);
      setShowDelete(false);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
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

  const getServicesData = async () => {
    try {
      const response = await servicesApi.getServicesData();
      setServicesData(response.data);
    } catch (error) {}
  };

  return (
    <Page>
      <Header>
        <PageTitle>Services</PageTitle>
        <Icon icon={FiPlusCircle} size={40} onClick={() => setShowAdd(true)} />
      </Header>

      <ServicesContainer>
        {servicesData?.map((service, index) => (
          <ServiceEditor
            key={index}
            title={service?.title}
            description={service?.description}
            img={service?.image}
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

      {/* modals */}
      <ServiceAdd isOpen={showAdd} onClose={() => setShowAdd(false)} />
      <DeleteConfirmation
        isOpen={showDelete}
        selected={selected}
        onDelete={handleDelete}
        loading={loading}
        onCancel={() => setShowDelete(false)}
      />
      <ServiceEdit
        isOpen={showServiceEdit}
        service={selected}
        onClose={() => setShowServiceEdit(false)}
      />
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
  color: ${({ theme }) => theme.dark_color};
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
`;
