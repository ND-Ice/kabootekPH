import React from "react";
import styled from "styled-components";

import { Button } from "..";
import { TextInput, TextArea } from "../forms";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          fill="#00BFA6"
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
            <InfoDescription>info@kabootekphcom</InfoDescription>
          </div>
          <div>
            <InfoHeader>phone</InfoHeader>
            <InfoDescription>PH (+63) 9955080304</InfoDescription>
          </div>
          <div>
            <InfoHeader>address</InfoHeader>
            <InfoDescription>
              Unit 25-D, 2nd Floor, Zeta II Building, 191 Salcedo Street,
              Legaspi Village, San Lorenzo, 1223 City of Makati
            </InfoDescription>
          </div>
        </InfoWrapper>
        <FormWrapper onSubmit={handleSubmit} data-aos="fade-left">
          <TextInput type="text" placeholder="Fullname" />
          <TextInput type="email" placeholder="Email" />
          <TextArea name="message" id="message" placeholder="Hi there!" />
          <Button>Send</Button>
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
  color: ${({ theme }) => theme.dark};

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
  color: ${({ theme }) => theme.dark};

  @media (min-width: 900px) {
    margin-bottom: 10rem;
  }
`;

const Grid1x2 = styled("div")`
  display: grid;
  justify-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
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
`;

const FormWrapper = styled("form")`
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
`;
