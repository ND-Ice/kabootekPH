import React, { useState } from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";

import { TextArea } from "../forms";
import { Icon } from "../";

export default function AboutDescriptionEdit({ onClose }) {
  const [description, setDescription] = useState(
    "KabootekPH INC, a tech company that was established on year 2019. Kabootek is one of the fastest growing company that specializes in mobile and web applications."
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <IconWrapper onClick={onClose}>
        <Icon icon={FiXCircle} size={40} color="#F61767" />
      </IconWrapper>
      <FieldWrapper>
        <FormTitle>Description</FormTitle>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FieldWrapper>
      <Button>Save</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  width: 500px;
  border-radius: 3rem;
  background-color: #ffffff;
  overflow: hidden;
  color: ${({ theme }) => theme.dark};
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
`;

const FieldWrapper = styled.div`
  padding: 1rem 5rem;
`;

const FormTitle = styled.h1`
  font-size: 3.6rem;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  border: none;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.accent};

  &:hover {
    background-color: ${({ theme }) => theme.active};
  }
`;
