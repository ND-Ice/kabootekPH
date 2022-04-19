import React from "react";
import { useFormikContext } from "formik";

import { TextInput } from "../";
import ErrorMessage from "./ErrorMessage";

export default function AppFormInput({ name, ...otherProps }) {
  const { touched, setFieldTouched, values, handleChange, errors } =
    useFormikContext();
  return (
    <>
      <TextInput
        name={name}
        value={values[name]}
        errors={touched[name] && errors[name]}
        onChange={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} errors={errors[name]} />
    </>
  );
}
