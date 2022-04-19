import React from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";
import * as Yup from "yup";

import { Icon, HeroImageSelection } from "../";
import { heroImages } from "../../utils/data";
import { AppForm, SubmitButton } from "../forms/formik";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("Please select an image"),
});

export default function AboutImageEdit({ onClose }) {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <IconWrapper onClick={onClose}>
        <Icon icon={FiXCircle} size={40} color="#F61767" />
      </IconWrapper>

      <AppForm
        initialValues={{ image: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FieldWrapper>
          <FormTitle>Image</FormTitle>
          <HeroImageSelection name="image" data={heroImages} />
        </FieldWrapper>

        <ButtonWrapper>
          <SubmitButton className="save-btn">Apply</SubmitButton>
        </ButtonWrapper>
      </AppForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  width: 1220px;
  border-radius: 3rem;
  background-color: #ffffff;
  color: ${({ theme }) => theme.dark};
  overflow: hidden;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 3rem;
`;

const FieldWrapper = styled.div`
  padding: 2rem 5rem;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5rem;
`;
