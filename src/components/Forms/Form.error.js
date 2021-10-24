import React from "react";
import { ErrorMessage } from "formik";

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMsg) => {
        return <div style={{ color: "red" }}>{errMsg}</div>;
      }}
    </ErrorMessage>
  );
};

export default FormError;
