import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { Icon, HeroImageSelection, Modal } from "../";
import { AppForm, ErrorMessage, SubmitButton } from "../forms/formik";
import { heroImages } from "../../utils/data";

import { AboutContext } from "../../context/AboutProvider";
import aboutApi from "../../api/about";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("Please select an image"),
});

export default function AboutImageEdit({ onClose, ...otherProps }) {
  const { aboutData, setAboutData } = useContext(AboutContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await aboutApi.updateAbout(values, aboutData?.id);
      setAboutData({ ...aboutData, ...response.data });
      setLoading(false);
      setErrorMessage(null);
      toast.success("Updated Successfully.");
      onClose();
    } catch (error) {
      setLoading(false);
      setErrorMessage(error);
      toast.error("An error occured.");
    }
  };
  return (
    <Modal onClose={onClose} {...otherProps}>
      <FormWrapper onSubmit={handleSubmit}>
        <IconWrapper onClick={onClose}>
          <Icon icon={FiXCircle} size={40} color="#F61767" />
        </IconWrapper>

        <AppForm
          initialValues={{ image: aboutData?.image }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FieldWrapper>
            <FormTitle>Image</FormTitle>
            <HeroImageSelection name="image" data={heroImages} />
            <ErrorMessage
              visible={errorMessage}
              errors={
                errorMessage?.response?.data?.message ||
                "Something went wrong. Please try again later."
              }
            />
          </FieldWrapper>

          <ButtonWrapper>
            <SubmitButton className="save-btn">
              {loading ? "Applying" : "Apply"}
            </SubmitButton>
          </ButtonWrapper>
        </AppForm>
      </FormWrapper>
    </Modal>
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
