import React from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { ErrorMessage } from "./forms/formik";

export default function HeroImageSelection({ name, data }) {
  const { values, errors, setFieldValue } = useFormikContext();

  return (
    <>
      <Grid>
        {data.map((image, index) => (
          <Image
            key={index}
            src={image}
            onClick={() => setFieldValue(name, image)}
            selected={values[name] === image}
          />
        ))}
      </Grid>
      <ErrorMessage visible={errors[name]} errors={errors[name]} />
    </>
  );
}
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  object-fit: cover;
  padding: 1rem;
  cursor: pointer;
  border-radius: 2rem;
  position: relative;
  transition: all 300ms ease;
  outline: 1px solid ${({ theme }) => theme.accent_color};
  border: 1rem solid
    ${({ theme, selected }) =>
      selected ? theme.accent_color : theme.light_color};

  &:hover {
    border-color: ${({ theme }) => theme.accent_color};
  }
`;
