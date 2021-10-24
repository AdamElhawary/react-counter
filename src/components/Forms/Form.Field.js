import React from "react";
import { Field } from "formik";
import FormError from "./Form.error";
const FormField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(customField) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block" }}>
              {label}
            </label>
            <input
              {...customField.field}
              type={type}
              id={name}
              defaultChecked={customField.field.value}
            />
            <FormError name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default FormField;
