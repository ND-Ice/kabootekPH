import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

import {
  AppForm,
  AppFormInput,
  AppFormPassword,
  SubmitButton,
} from "../components/forms/formik";
import { CheckBox } from "../components/forms";
import hero_image from "../images/login_hero.png";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "This field should be atleast 8 characters long.")
    .required("This field is required."),
  password: Yup.string()
    .min(8, "This field should be atleast 8 characters long.")
    .required("This field is required."),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [peeking, setPeeking] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    navigate("/dashboard");
  };

  return (
    <Container data-aos="zoom-in" data-aos-duration="1000">
      <Grid1x2>
        <FormContainer>
          <HeaderContainer>
            <FaArrowCircleLeft
              className="back-icon"
              onClick={() => navigate("/")}
            />
            <Title>Login</Title>
          </HeaderContainer>
          <AppForm
            initialValues={{ username: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <AppFormInput
              placeholder="Username"
              name="username"
              id="username"
              title="Username"
            />
            <AppFormPassword
              name="password"
              placeholder="Password"
              id="password"
              title="Password"
              isPeeking={peeking}
            />

            <FlexContainer>
              <CheckBox
                title="Password"
                id="showPassword"
                onChange={() => setPeeking(!peeking)}
              />
              <SubmitButton>Sign</SubmitButton>
            </FlexContainer>
          </AppForm>
        </FormContainer>
        <HeroContainer>
          <LoginHero src={hero_image} />
          <Title>welcome</Title>
          <HeroShade />
        </HeroContainer>
      </Grid1x2>
    </Container>
  );
}

const Container = styled.section`
  padding: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.dark};
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

const Grid1x2 = styled.div`
  display: grid;
  max-width: 1000px;
  gap: 3rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.1);
  }
`;

const FormContainer = styled.div`
  padding: 1rem;

  @media (min-width: 800px) {
    padding: 5rem;
  }

  & .back-icon {
    cursor: pointer;
    width: 30px;
    height: 30px;
    transition: all 300ms ease;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.25rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const HeaderContainer = styled(FlexContainer)`
  margin-top: 0;
  margin-bottom: 5rem;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  display: none;
  position: relative;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const LoginHero = styled.img``;

const HeroShade = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.25;
  background: ${({ theme }) => theme.accent};
  z-index: -1;
`;
