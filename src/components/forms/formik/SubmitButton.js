import React from "react";
import { useFormikContext } from "formik";

import { Button } from "../..";

export default function SubmitButton({ children, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button type="button" {...otherProps} onClick={handleSubmit}>
      {children}
    </Button>
  );
}
