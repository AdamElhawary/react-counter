import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { initialValues, onSubmit, validationSchema } from "./Form";
import FormField from "./FormField";
const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div style={{ padding: 20 }}>
              <FormField label="Email *" name="email" type="email" />
              <FormField label="Password *" name="password" type="password" />
            </div>
            <button className="text-center">Log in</button>
            New User?
            <Link to="/register">Register</Link>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;
