"use client";

import Button from "@/components/UI/Button/Button";
import styles from "./ContactForm.module.css";
import Icon from "@/components/UI/Icon/Icon";
import { VscSend } from "react-icons/vsc";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import { useId } from "react";
import FormSchema from "./formValidation";

interface FormValues {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log("Form:", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={styles.contactForm}>
        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel} htmlFor={`${fieldId}-name`}>
            <span className={styles.inputLabelText}>
              Your name <span className={styles.asterix}>*</span>
            </span>
          </label>
          <Field
            id={`${fieldId}-name`}
            type="text"
            name="name"
            className={styles.input}
            placeholder="John Doe"
          />
          <p className={styles.error}>
            <ErrorMessage name="name" />
          </p>
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel} htmlFor={`${fieldId}-email`}>
            <span className={styles.inputLabelText}>
              Your email <span className={styles.asterix}>*</span>
            </span>
          </label>
          <Field
            id={`${fieldId}-email`}
            type="email"
            name="email"
            className={styles.input}
            placeholder="johndoe@example.com"
          />
          <p className={styles.error}>
            <ErrorMessage name="email" />
          </p>
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel} htmlFor={`${fieldId}-subject`}>
            <span className={styles.inputLabelText}>Subject</span>
          </label>
          <Field
            id={`${fieldId}-subject`}
            type="text"
            name="subject"
            className={styles.input}
            placeholder="Portfolio / project inquiry"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.inputLabel} htmlFor={`${fieldId}-message`}>
            <span className={styles.inputLabelText}>
              Your message <span className={styles.asterix}>*</span>
            </span>
          </label>
          <Field
            id={`${fieldId}-message`}
            name="message"
            className={styles.textArea}
            placeholder="Hi Alisa, I'd like to talk about..."
            as="textarea"
          ></Field>
          <p className={styles.error}>
            <ErrorMessage name="message" />
          </p>
        </div>

        <Button type="submit" className={styles.formBtn}>
          Send message
          <Icon icon={VscSend} size={18} className={styles.btnIcon} />
        </Button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
