"use client";

import Button from "@/components/UI/Button/Button";
import styles from "./ContactForm.module.css";
import Icon from "@/components/UI/Icon/Icon";
import { VscSend } from "react-icons/vsc";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import { useId } from "react";
import FormSchema from "./formValidation";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const fieldId = useId();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    actions.setStatus("");
    if (!serviceId || !templateId || !publicKey) {
      actions.setStatus("Email service is not configured.");
      actions.setSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey,
        },
      );
      actions.resetForm();
      toast.success("Thank you! Message sent. I will get back to you shortly.");
    } catch {
      toast.error(
        "Something went wrong. Please try again or email me directly.",
      );
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      {({ errors, isSubmitting, touched }) => (
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
              aria-describedby={`${fieldId}-name-error`}
              aria-invalid={touched.name && errors.name ? "true" : undefined}
            />
            <p className={styles.error} id={`${fieldId}-name-error`}>
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
              aria-describedby={`${fieldId}-email-error`}
              aria-invalid={touched.email && errors.email ? "true" : undefined}
            />
            <p className={styles.error} id={`${fieldId}-email-error`}>
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
              aria-describedby={`${fieldId}-message-error`}
              aria-invalid={
                touched.message && errors.message ? "true" : undefined
              }
            ></Field>
            <p className={styles.error} id={`${fieldId}-message-error`}>
              <ErrorMessage name="message" />
            </p>
          </div>

          <Button
            type="submit"
            className={styles.formBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
            <Icon icon={VscSend} size={18} className={styles.btnIcon} />
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
