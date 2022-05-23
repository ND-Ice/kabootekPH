import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { EmailContext } from "../../context/EmailProvider";
import { PhoneContext } from "../../context/PhoneProvider";
import { AddressContext } from "../../context/AddressProvider";

import phoneApi from "../../api/phone";
import emailApi from "../../api/email";
import addressApi from "../../api/address";
import mailerApi from "../../api/mailer";
import {
  AppForm,
  AppFormArea,
  AppFormInput,
  SubmitButton,
} from "../forms/formik";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "This should be atleast 4 characters long.")
    .required("This field si required."),
  email: Yup.string()
    .email("This should be a valid email address.")
    .required("This field si required."),
  message: Yup.string()
    .min(20, "This should be atleast 20 characters long.")
    .required("This field is required."),
});

export default function Contact() {
  const { emailData, setEmailData } = useContext(EmailContext);
  const { phoneData, setPhoneData } = useContext(PhoneContext);
  const { addressData, setAddressData } = useContext(AddressContext);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getEmails();
    getPhoneData();
    getAddressData();
  }, []);

  const getEmails = async () => {
    try {
      const response = await emailApi.getEmailData();
      setEmailData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPhoneData = async () => {
    try {
      const response = await phoneApi.getPhoneData();
      setPhoneData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddressData = async () => {
    try {
      const response = await addressApi.getAddressData();
      setAddressData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setSending(true);
      await mailerApi.sendMail(values);
      toast.success("Mail sent successfully.");
      setSending(false);
      resetForm();
    } catch (error) {
      setSending(false);
      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    }
  };

  return (
    <Container id="contact">
      <Curve
        width="100%"
        viewBox="0 0 1535 666"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1021.94 510.861C1179.8 610.408 1535 666 1535 666V0H-1V132.617C-1 132.617 568.598 44.7297 797.274 286.772C877.19 371.36 923.104 448.537 1021.94 510.861Z"
          fill-opacity="0.05"
        />
      </Curve>
      <PageHeading data-aos="fade-down" data-aos-duration="1000">
        Contact
      </PageHeading>
      <Grid1x2>
        <InfoWrapper data-aos="fade-right">
          <div>
            <InfoHeader>email</InfoHeader>
            {emailData?.length !== 0 ? (
              emailData?.map((item) => (
                <InfoDescription key={item?.id}>{item?.email}</InfoDescription>
              ))
            ) : (
              <InfoDescription>info@kabootekphcom </InfoDescription>
            )}
          </div>
          <div>
            <InfoHeader>phone</InfoHeader>
            {phoneData?.length !== 0 ? (
              phoneData?.map((item) => (
                <InfoDescription key={item?.id}>{item?.phone}</InfoDescription>
              ))
            ) : (
              <InfoDescription>info@kabootekphcom </InfoDescription>
            )}
          </div>
          <div>
            <InfoHeader>address</InfoHeader>
            <InfoDescription>
              {addressData[0]?.address ||
                "Unit 25-D, 2nd Floor, Zeta II Building, 191 Salcedo Street, Legaspi Village, San Lorenzo, 1223 City of Makati"}
            </InfoDescription>
          </div>
        </InfoWrapper>
        <FormWrapper data-aos="fade-left">
          <AppForm
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <AppFormInput name="name" placeholder="Fullname" />
            <AppFormInput name="email" placeholder="Email" />
            <AppFormArea name="message" id="message" placeholder="Hi there!" />
            <SubmitButton>{sending ? "Sending..." : "Send"}</SubmitButton>
          </AppForm>
        </FormWrapper>
      </Grid1x2>
    </Container>
  );
}

const Container = styled("div")`
  padding: 1rem;
  text-align: center;
  min-height: 100vh;
  position: relative;
  color: ${({ theme }) => theme.dark_color};

  @media (min-width: 900px) {
    text-align: left;
    padding: 10rem;
  }

  & > * {
    position: relative;
    z-index: 5;
  }
`;

const PageHeading = styled("h2")`
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.dark_color};

  @media (min-width: 900px) {
    margin-bottom: 10rem;
  }
`;

const Grid1x2 = styled("div")`
  display: grid;
  justify-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
  }
`;

const InfoWrapper = styled("div")`
  display: grid;
  @media (min-width: 900px) {
    justify-self: end;
    gap: 1rem;
  }
`;

const InfoHeader = styled("h3")`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const InfoDescription = styled("p")`
  font-size: 2rem;
  margin-top: 0;
  max-width: 30ch;
  line-height: 3rem;
  margin: 0;
`;

const FormWrapper = styled.div`
  max-width: 350px;
  text-align: right;

  @media (min-width: 900px) {
    justify-self: start;
  }
`;

const Curve = styled("svg")`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  fill: ${({ theme }) => theme.accent_color};
`;
