import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

import { CheckBox, Password, TextInput } from "../components/forms";
import { Button } from "../components";
import hero_image from "../images/login_hero.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/dashboard");

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
          <TextInput placeholder="Username" id="username" title="Username" />
          <Password placeholder="Password" id="password" title="Password" />

          <FlexContainer>
            <CheckBox title="Password" id="showPassword" />
            <Button onClick={handleSubmit}>Sign</Button>
          </FlexContainer>
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
    padding: 10rem 5rem;
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
