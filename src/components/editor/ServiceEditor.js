import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { Icon } from "../";

export default function ServiceEditor({ img, title, description }) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
      </IconWrapper>
      <ServiceImage src={img} alt="service-icon" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <EditWrapper>
        <Icon icon={FaTrashAlt} color="#4b4b4b" size={20} />
      </EditWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  max-width: 250px;
  text-align: center;
  border-radius: 3rem;
  padding: 3rem;
  height: 400px;
  max-height: 500px;
  position: relative;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled("h3")`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.dark};
`;

const Description = styled("p")`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.dark};
`;

const ServiceImage = styled.img`
  margin-top: 1rem;
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

const EditWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`;
