import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Please note available email")
    .required("It is important area"),
  password: yup
    .string()
    .min(5, "Password must be 5 characters")
    .required("It is Important area"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords are not same")
    .required("It is Important area"),
});
export default validations;
