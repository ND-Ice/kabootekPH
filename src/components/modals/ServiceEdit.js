import React, { useContext, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { FiXCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import { Icon, ImageSelection, Modal } from "../";
import {
  SubmitButton,
  AppFormArea,
  AppForm,
  ErrorMessage,
} from "../forms/formik";
import { servicesImageSelection } from "../../utils/data";
import servicesApi from "../../api/services";
import { ServicesContext } from "../../context/ServicesProvider";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("Please select an image"),
  title: Yup.string()
    .min(5, "This field should be atleast 5 characters long.")
    .required("This field is required."),
  description: Yup.string()
    .min(10, "This should be atleast 10 characters long.")
    .max(200, "This field should not exceed 200 characters long.")
    .required("This field is required."),
});

export default function ServiceEdti({ service, onClose, ...otherProps }) {
  const [loading, setLoading] = useState(false);
  const { setServicesData } = useContext(ServicesContext);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const response = await servicesApi.updateService(values, service?.id);
      setServicesData((prevState) =>
        prevState.map((serviceData) =>
          serviceData?.id === service?.id
            ? { ...serviceData, ...response.data }
            : serviceData
        )
      );
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
      <Form>
        <Icon
          className="close-icon"
          icon={FiXCircle}
          color="#F61767"
          onClick={onClose}
        />
        <AppForm
          initialValues={{
            image: service?.image,
            title: service?.title,
            description: service?.description,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <ContentWrapper>
            <Section>
              <h1>Image</h1>
              <ImageSelection name="image" data={servicesImageSelection} />
            </Section>
            <Section>
              <h1>Title</h1>
              <AppFormArea
                name="title"
                placeholder="Title"
                className="textarea--title"
              />
            </Section>
            <Section>
              <h1>Description</h1>
              <AppFormArea
                name="description"
                placeholder="Description"
                className="textarea--description"
              />
            </Section>
            <ErrorMessage
              visible={errorMessage}
              errors={
                errorMessage?.response?.data?.message ||
                "Something went wrong. Please try again later."
              }
            />
          </ContentWrapper>
          <SubmitButton className="save-btn">
            {loading ? "Saving..." : "Save"}
          </SubmitButton>
        </AppForm>
      </Form>
    </Modal>
  );
}

const Form = styled.div`
  width: 700px;
  min-height: 600px;
  background-color: #ffffff;
  border-radius: 3rem;
  position: relative;
  color: #4b4b4b;
  overflow: hidden;

  .textarea--title {
    min-height: 30px;
  }

  .textarea--description {
    min-height: 60px;
  }

  .close-icon {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .save-btn {
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

const ContentWrapper = styled.div`
  padding: 1rem 3rem;
`;

const Section = styled.div`
  color: ${({ theme }) => theme.dark_color};
`;
