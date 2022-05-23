import React, { useContext, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import ImageSelection from "../ImageSelection";
import { Icon, Modal } from "../";
import {
  AppForm,
  AppFormArea,
  ErrorMessage,
  SubmitButton,
} from "../forms/formik";

import { heroImages } from "../../utils/data";
import { HomeContext } from "../../context/HomeProvider";
import homeApi from "../../api/home";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required."),
  description: Yup.string().required("This field is required."),
  image: Yup.string().required("This field is required"),
});

export default function HomeDataAdd({ onClose, ...otherProps }) {
  const { setHomeData } = useContext(HomeContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await homeApi.addHomeData(values);
      setErrorMessage(null);
      setLoading(false);
      setHomeData(response.data);
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
          initialValues={{ title: "", description: "", image: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FieldWrapper>
            <FormTitle>Home</FormTitle>
            <AppFormArea
              className="text-area"
              name="title"
              placeholder="Title"
            />
            <AppFormArea
              className="text-area"
              name="description"
              placeholder="Description"
            />
            <ImageSelection name="image" data={heroImages} />
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
  width: 800px;
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

  .text-area {
    min-height: 50px;
  }
`;

const FormTitle = styled.h1`
  font-size: 3.6rem;
  text-align: center;
`;
