import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

import { Icon } from ".";

export default function DescriptionEdit({ children, onEdit }) {
  return (
    <PageDescription>
      {children}
      <IconWrapper onClick={onEdit}>
        <Icon icon={FaPencilAlt} color="#4b4b4b" size={20} />
      </IconWrapper>
    </PageDescription>
  );
}

const PageDescription = styled.p`
  line-height: 3rem;
  max-width: 40ch;
  color: ${({ theme }) => theme.dark_color};
`;

const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;
