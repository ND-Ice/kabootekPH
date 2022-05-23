import React, { useContext, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { FiXCircle } from "react-icons/fi";

import { Icon, Modal } from "..";
import {
  AppForm,
  AppFormInput,
  ErrorMessage,
  SubmitButton,
} from "../forms/formik";

import emailApi from "../../api/email";
import { EmailContext } from "../../context/EmailProvider";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("This should be a valid email address.")
    .required("This field is required."),
});

export default function EmailEdit({ selected, onClose, ...otherProps }) {
  const { setEmailData } = useContext(EmailContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await emailApi.updateEmail(values, selected?.id);
      setEmailData((prevState) =>
        prevState.map((data) =>
          data?.id === selected?.id ? { ...data, ...response.data } : data
        )
      );
      setErrorMessage(null);
      toast.success("Updated Successfully.");
      setLoading(false);
      onClose();
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      toast.error("An error occured.");
    }
  };
  return (
    <Modal onClose={onClose} {...otherProps}>
      <FormWrapper>
        <IconWrapper onClick={onClose}>
          <Icon icon={FiXCircle} size={40} color="#F61767" />
        </IconWrapper>

        <AppForm
          initialValues={{ email: selected?.email }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FieldWrapper>
            <FormTitle>Email</FormTitle>
            <AppFormInput name="email" placeholder="Email Address" />
            <ErrorMessage
              visible={errorMessage}
              errors={
                errorMessage?.response?.data?.message ||
                "Something went wrong. Please try again later."
              }
            />
          </FieldWrapper>
          <SubmitButton className="save-btn">
            {loading ? "Saving..." : "Save"}
          </SubmitButton>
        </AppForm>
      </FormWrapper>
    </Modal>
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
    color: ${({ theme }) => theme.light_color};
    background-color: ${({ theme }) => theme.accent_color};

    &:hover {
      background-color: ${({ theme }) => theme.active_color};
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
