import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsOps";
/* import { FaUser } from "react-icons/fa"; */

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

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

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
            
            NAME
          </label>
          <Field className={styles.field} type="text" name="name"></Field>
          <ErrorMessage className={styles.error} name="name" component="span" />
        </div>

        <div>
          <label className={styles.titel} htmlFor="number">
            NUMBER
          </label>
          <Field className={styles.field} type="number" name="number"></Field>
          <ErrorMessage
            className={styles.error}
            name="number"
            component="span"
          />
        </div>

        <button className={styles.buttonForm} type="submit">
          ADD CONTACT
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
