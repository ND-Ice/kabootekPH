import React from "react";
import { useFormikContext } from "formik";
import TextArea from "../TextArea";
import ErrorMessage from "./ErrorMessage";

export default function AppFormArea({ name, ...otherProps }) {
  const { values, errors, touched, setFieldTouched, handleChange } =
    useFormikContext();
  return (
    <>
      <TextArea
        name={name}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        errors={touched[name] && errors[name]}
        onChange={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} errors={errors[name]} />
    </>
  );
}
