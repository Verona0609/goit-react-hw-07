import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { selectLoading, selectError } from "./redux/contactsSlice";

/*  */
const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>PHONEBOOK</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ContactList />
    </div>
  );
};

export default App;
