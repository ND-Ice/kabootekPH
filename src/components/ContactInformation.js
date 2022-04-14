import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

import { Icon } from "./";

export default function ContactInformation({ title, description, onEdit }) {
  return (
    <Component>
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentDescription>
        {description}
        <IconWrapper onClick={onEdit}>
          <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
        </IconWrapper>
      </ComponentDescription>
    </Component>
  );
}

const Component = styled.div`
  color: ${({ theme }) => theme.dark};
`;

const ComponentTitle = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const ComponentDescription = styled.p`
  line-height: 3rem;
  max-width: 40ch;
  margin: 0;
`;
const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;
