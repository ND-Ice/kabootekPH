import React from "react";
import styled from "styled-components";

export default function Service({ img, title, description, index }) {
  return (
    <Wrapper data-aos="fade-down" data-aos-delay={`${index + 1}00`}>
      <ServiceImage src={img} alt="service-icon" />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  max-width: 290px;
  text-align: center;
  border-radius: 3rem;
  padding: 5rem 3.8rem;
  box-shadow: 0px 10px 20px 10px rgba(0, 0, 0, 0.1);
  height: 500px;
  max-height: 500px;
`;

const Title = styled("h3")`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.dark_color};
`;

const Description = styled("p")`
  font-size: 2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.dark_color};
`;

const ServiceImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
`;
