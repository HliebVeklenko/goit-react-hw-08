import { useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { selectError, selectLoading } from "../src/redux/contactsSlice";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../src/redux/contactsOps";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <Error>Something went wrong.</Error>}
      {loading && <Loader />}
      <ContactList />
    </Layout>
  );
  // const [contacts, setContacts] = useState(() => {
  //   const actualContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (
  //     actualContacts &&
  //     Array.isArray(actualContacts) &&
  //     actualContacts.length > 0
  //   ) {
  //     return actualContacts;
  //   }
  //   return [];
  // });

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const [filter, setFilter] = useState("");

  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.toLowerCase())
  // );

  // const addContact = (contact) => {
  //   setContacts([...contacts, contact]);
  // };

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter((contact) => contact.id !== contactId));
  // };

  // return (
  //   <div>
  //     <h1>Phonebook</h1>
  //     <ContactForm onAdd={addContact} />
  //     <SearchBox value={filter} onChange={setFilter} />
  //     <ContactList contacts={filteredContacts} onDelete={deleteContact} />
  //   </div>
  // );
}

export default App;
