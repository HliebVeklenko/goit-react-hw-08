import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

function ContactForm() {
  const dispatch = useDispatch();

  const contactPattern = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactPattern}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label className={css.label}>
            Name
            <Field className={css.field} type="text" name="name" />
          </label>
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.input}>
          <label className={css.label}>
            Number
            <Field type="text" name="number" />
          </label>
          <ErrorMessage name="number" as="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
