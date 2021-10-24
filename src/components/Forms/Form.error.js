import React from "react";
import { ErrorMessage } from "formik";

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMsg) => {
        return <div style={{ color: "#8b0000" }}>{errMsg}</div>;
      }}
    </ErrorMessage>
  );
};

export default FormError;
