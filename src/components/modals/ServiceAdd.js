import React from "react";
import styled from "styled-components";
import { FiXCircle } from "react-icons/fi";
import * as Yup from "yup";

import { Icon, ImageSelection } from "../";
import { AppForm, AppFormArea, SubmitButton } from "../forms/formik";
import { servicesImageSelection } from "../../utils/data";

const validationSchema = Yup.object().shape({
  image: Yup.string().required("Please select an image."),
  title: Yup.string()
    .min(10, "This shoud be atleast 10 chacters long.")
    .required("This field is required."),
  description: Yup.string()
    .min(10, "This should be atleast 10 characters long.")
    .max(200, "This should not exceed 200 characters.")
    .required("This field is required."),
});

export default function ServiceAdd({ onClose }) {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Form>
      <Icon
        className="close-icon"
        icon={FiXCircle}
        color="#F61767"
        onClick={onClose}
      />
      <AppForm
        initialValues={{ image: "", title: "", description: "" }}
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
        </ContentWrapper>
        <SubmitButton className="save-btn">Save</SubmitButton>
      </AppForm>
    </Form>
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
    min-height: 40px;
  }

  .textarea--description {
    min-height: 80px;
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
    border-radius: 0;
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
  }
`;

const ContentWrapper = styled.div`
  padding: 1rem 4rem;
`;

const Section = styled.div``;
