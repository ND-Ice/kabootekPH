import React, { useContext, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import { Icon, Modal } from "../";
import {
  AppForm,
  AppFormInput,
  ErrorMessage,
  SubmitButton,
} from "../forms/formik";

import { PhoneContext } from "../../context/PhoneProvider";
import phoneApi from "../../api/phone";

const validationSchema = Yup.object().shape({
  phone: Yup.string().required("This field is required."),
});

export default function ContactPhoneAdd({ onClose, ...otherProps }) {
  const { setPhoneData } = useContext(PhoneContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await phoneApi.addPhone(values);
      setPhoneData((prevState) => [...prevState, response.data]);
      setLoading(false);
      setErrorMessage(null);
      toast.success("Added Successfully.");
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
          initialValues={{ phone: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FieldWrapper>
            <FormTitle>Phone</FormTitle>
            <AppFormInput name="phone" placeholder="Phone Number" />
            <ErrorMessage
              visible={errorMessage}
              errors={
                errorMessage?.response?.data?.message ||
                "Something went wrong. plese try again later."
              }
            />
          </FieldWrapper>
          <SubmitButton className="save-btn" disabled={loading}>
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
    font-size: 1.6rem;
    border-radius: 0;
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
