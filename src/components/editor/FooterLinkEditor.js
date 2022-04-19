import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import { Icon } from "../";

export default function FooterLinkEditor({ title, onEdit, onDelete }) {
  return (
    <Component>
      {title}
      <div className="action-wrapper">
        <Icon icon={FaPencilAlt} color="#ffffff" onClick={onEdit} size={20} />
        <Icon icon={FiX} color="#ffffff" onClick={onDelete} size={20} />
      </div>
    </Component>
  );
}

const Component = styled.div`
  position: relative;

  .action-wrapper {
    position: absolute;
    margin-left: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
