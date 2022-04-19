import React from "react";
import { useFormikContext } from "formik";

import { Password } from "../";
import ErrorMessage from "./ErrorMessage";

export default function AppFormPassword({ name, ...otherProps }) {
  const { values, errors, touched, setFieldTouched, handleChange } =
    useFormikContext();
  return (
    <>
      <Password
        name={name}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange}
        errors={touched[name] && errors[name]}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} errors={errors[name]} />
    </>
  );
}
