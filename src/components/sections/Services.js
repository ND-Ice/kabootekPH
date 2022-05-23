import React, { useContext, useEffect } from "react";
import styled from "styled-components";

// components import
import { Service } from "..";

// utils import
import { services } from "../../utils/data";
import servicesApi from "../../api/services";
import { ServicesContext } from "../../context/ServicesProvider";

export default function Services() {
  const { servicesData, setServicesData } = useContext(ServicesContext);

  useEffect(() => {
    getServicesData();
  }, []);

  const getServicesData = async () => {
    try {
      const response = await servicesApi.getServicesData();
      setServicesData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container id="services">
      <PageHeader data-aos="fade-down" data-aos-duration="1000">
        Services
      </PageHeader>
      <CardContainer>
        {servicesData?.length !== 0
          ? servicesData?.map((service, index) => (
              <Service
                key={index}
                index={index}
                img={service.image}
                title={service.title}
                description={service.description}
              />
            ))
          : services?.map((service, index) => (
              <Service
                key={index}
                index={index}
                img={service.image}
                image={service?.image}
                title={service?.title}
                description={service?.description}
              />
            ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled("div")`
  min-height: 100vh;
  padding: 1rem;
  text-align: center;
  position: relative;

  @media (min-width: 1240px) {
    padding: 10rem;
  }
`;

const PageHeader = styled("h2")`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.dark_color};

  @media (min-width: 1240px) {
    margin-bottom: 10rem;
  }
`;

const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  position: relative;

  @media (min-width: 720px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
