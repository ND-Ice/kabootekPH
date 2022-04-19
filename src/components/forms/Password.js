import styled from "styled-components";

export default function Password({
  title,
  id,
  errors,
  isPeeking,
  ...otherProps
}) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <CustomPassword
        type={isPeeking ? "text" : "password"}
        id={id}
        errors={errors}
        {...otherProps}
      />
    </>
  );
}

const CustomPassword = styled("input")`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  margin: 1rem 0;
  outline: none;
  font-size: 2rem;
  color: #4b4b4b;
  border: 2px solid ${({ errors }) => (errors ? "red" : "#4b4b4b")};

  &::placeholder {
    color: ${({ errors }) => (errors ? "red" : "#4b4b4b")};
  }
`;
