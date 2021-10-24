import * as yup from "yup";
export const initialValues = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  active: false,
  gender: "",
  hobbies: ["Coding"],
};
export const onSubmit = (data) => console.log(data);

export const validationSchema = yup.object({
  userName: yup.string().required("UserName field is required"),
  email: yup
    .string()
    .email("Please enter a valid Email Address")
    .required("Email field is required"),
  password: yup
    .string()
    .required("Password field is required")
    .min(8, "Password is too short - Min is 8 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase and one lowercase letter,One number and one special symbol"
    ),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required("required"),
});
