import React from "react";
import styled from "styled-components";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import { Icon } from "../";

export default function ServiceEditor({
  img,
  title,
  description,
  onEdit,
  onDelete,
}) {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} onClick={onEdit} />
      </IconWrapper>
      <ServiceImage src={img} alt="service-icon" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <EditWrapper>
        <Icon icon={FaTrashAlt} color="#4b4b4b" size={20} onClick={onDelete} />
      </EditWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  min-width: 250px;
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
  color: ${({ theme }) => theme.dark_color};
`;

const Description = styled("p")`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.dark_color};
`;

const ServiceImage = styled.img`
  margin-top: 1rem;
  margin: auto;
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
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
