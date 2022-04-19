import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { FiXCircle } from "react-icons/fi";

import { Icon } from "../";
import { AppForm, AppFormArea, SubmitButton } from "../forms/formik";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "This should be atleast 5 characters long.")
    .required("This field required."),
});

export default function HomeTitleEdit({ onClose }) {
  const title = "eWallet Drive Company";

  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <FormWrapper>
      <IconWrapper onClick={onClose}>
        <Icon icon={FiXCircle} size={40} color="#F61767" />
      </IconWrapper>
      <AppForm
        initialValues={{ title }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FieldWrapper>
          <FormTitle>Title</FormTitle>
          <AppFormArea name="title" placeholder="Title" />
        </FieldWrapper>
        <SubmitButton className="save-btn">Save</SubmitButton>
      </AppForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  width: 500px;
  border-radius: 3rem;
  background-color: #ffffff;
  overflow: hidden;
  color: ${({ theme }) => theme.dark};

  & .save-btn {
    width: 100%;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 0;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 2rem 4rem;
    transition: all 300ms ease;
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme.accent};

    &:hover {
      background-color: ${({ theme }) => theme.active};
    }
  }
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
