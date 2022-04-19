import React, { useState } from "react";
import * as Yup from "yup";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";

import { Icon } from "../";
import { AppForm, AppFormInput, SubmitButton } from "../forms/formik";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "This should be atleast 5 characters long.")
    .required("This field is required."),
  href: Yup.string().required("This field is required."),
});

export default function FollowAdd({ onClose }) {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <IconWrapper onClick={onClose}>
        <Icon icon={FiXCircle} size={40} color="#F61767" />
      </IconWrapper>
      <AppForm
        initialValues={{ title: "", href: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FieldWrapper>
          <FormTitle>Follow </FormTitle>
          <AppFormInput name="title" placeholder="Title" />
          <AppFormInput name="href" placeholder="Link Address" />
        </FieldWrapper>
        <SubmitButton className="save-btn">Save</SubmitButton>
      </AppForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
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
  padding: 1rem 5rem 5rem 5rem;
`;

const FormTitle = styled.h1`
  font-size: 3.6rem;
  text-align: center;
`;
