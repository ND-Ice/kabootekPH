import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

import { Icon } from "../";

export default function FooterLinkEditor({ title, onEdit }) {
  return (
    <Component>
      {title}
      <IconWrapper onClick={onEdit}>
        <Icon icon={FaPencilAlt} color="#ffffff" size={20} />
      </IconWrapper>
    </Component>
  );
}

const Component = styled.div``;
const IconWrapper = styled.span`
  margin-left: 1rem;
  display: inline-block;
`;
