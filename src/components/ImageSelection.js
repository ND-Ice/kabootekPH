import React from "react";
import styled from "styled-components";
import { useFormikContext } from "formik";
import { ErrorMessage } from "./forms/formik";

export default function ImageSelection({ name, data }) {
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
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 1rem;
  position: relative;
  transition: all 300ms ease;
  outline: 1px solid ${({ theme }) => theme.accent_color};
  border: 0.5rem solid
    ${({ theme, selected }) =>
      selected ? theme.accent_color : theme.light_color};

  &:hover {
    border-color: ${({ theme }) => theme.accent_color};
  }
`;
