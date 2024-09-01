import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import { selectContacts } from "./redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";
import { addContact, deleteContact } from "./redux/contactsSlice";

const App = () => {
  const contacts = useSelector(selectContacts);
  const searchContact = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const addNewContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteNewContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addNewContact} />
      <SearchBox searchContact={searchContact} handleChange={handleChange} />
      <ContactList
        contacts={filterContact}
        onDeleteContact={deleteNewContact}
      />
    </div>
  );
};

export default App;
