import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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

  const handleSubmit = (values, action) => {
    if (
      contacts.find(
        (contact) =>
          contact.name.toLowerCase() === values.name.toLowerCase() ||
          contact.number === values.number
      )
    ) {
      action.resetForm();
      console.log("error");
    }
    dispatch(addContact(values)).unwrap();
    action.resetForm();
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
            <Field className={css.field} type="text" name="number" />
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
