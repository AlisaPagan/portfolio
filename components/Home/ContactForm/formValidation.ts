import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short. Use at least 2 characters.")
    .max(40, "Name is too long. Keep it under 40 characters.")
    .required("Please input your name."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please input your email."),
  subject: Yup.string(),
  message: Yup.string()
    .min(100, "Message is too short. Use at least 100 characters.")
    .max(800, "Message is too long. Keep it under 800 characters.")
    .required("Please enter your message."),
});

export default FormSchema;
