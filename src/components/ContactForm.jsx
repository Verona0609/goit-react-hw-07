import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
/* const numberVal = /([0-9]{3})[0-9]{3}-[0-9]{4}/; */
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Еnter real name!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Еnter real number!")
    .max(50, "Too long")
    .required("Number is required"),
  /*  .matches(numberVal) */
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };
  /*   const handleSubmit = (values, { resetForm }) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };*/
  const initialValues = { name: "", number: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div>
          <label className={styles.titel} htmlFor="name">
            Name
          </label>
          <Field className={styles.field} type="text" name="name"></Field>
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div>
          <label className={styles.titel} htmlFor="number">
            Number
          </label>
          <Field className={styles.field} type="number" name="number"></Field>
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.buttonForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
