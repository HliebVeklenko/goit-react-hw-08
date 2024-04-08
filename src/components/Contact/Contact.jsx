import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handlerDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.card}>
      <div className={css.contacts}>
        <p className={css.name}>{contact.name}</p>
        <p className={css.number}>{contact.number}</p>
      </div>
      <button className={css.button} onClick={handlerDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
