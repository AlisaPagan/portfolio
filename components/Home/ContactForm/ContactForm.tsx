"use client";

import Button from "@/components/UI/Button/Button";
import styles from "./ContactForm.module.css";
import Icon from "@/components/UI/Icon/Icon";
import { VscSend } from "react-icons/vsc";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

function ContactForm() {
  const fieldId = useId();

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={styles.contactForm}>
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
          required
        />

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
          required
        />

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
          required
          minLength={100}
          maxLength={800}
        ></Field>

        <Button type="submit" className={styles.formBtn}>
          Send message
          <Icon icon={VscSend} size={18} className={styles.btnIcon} />
        </Button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
