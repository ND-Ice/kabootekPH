import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";

import { Icon } from "./";

export default function ContactInformation({ title, items, onAdd, onEdit }) {
  return (
    <Component>
      <ComponentTitle>
        {title} <Icon icon={FiPlusCircle} onClick={onAdd} />
      </ComponentTitle>

      {items?.map((item, index) => (
        <ComponentDescription key={index}>
          {item?.title}
          <Icon
            className="edit-icon"
            icon={FaPencilAlt}
            color="#4b4b4b"
            size={20}
            onClick={() => onEdit(item)}
          />
        </ComponentDescription>
      ))}
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
  display: flex;
  align-items: center;
  line-height: 0;
  gap: 1rem;
`;

const ComponentDescription = styled.div`
  line-height: 3rem;
  max-width: 40ch;
  margin: 1rem 0;

  .edit-icon {
    margin-left: 1rem;
  }
`;
