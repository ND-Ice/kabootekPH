import React, { useState } from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";

import { TextArea } from "../forms";
import { Icon } from "../";

export default function HomeTitleEdit({ onClose }) {
  const [title, setTitle] = useState("eWallet Drive Company");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <IconWrapper onClick={onClose}>
        <Icon icon={FiXCircle} size={40} color="#F61767" />
      </IconWrapper>
      <FieldWrapper>
        <FormTitle>Title</FormTitle>
        <TextArea value={title} onChange={(e) => setTitle(e.target.value)} />
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
