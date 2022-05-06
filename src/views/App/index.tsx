import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactList from "components/ContactList";
import Header from "components/Header";
import InputField from "components/InputField";
import { formatSearchQuery } from "components/utils/generic.util";
import ContactsHttp from "http/contacts.http";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;

    fetchContacts(term);
  };

  const contactsHttp = useMemo(() => new ContactsHttp(), []);

  const fetchContacts = useCallback(
    async (query?: string) => {
      const contacts = await contactsHttp.getContacts(query);

      setContacts(contacts);
    },
    [contactsHttp]
  );

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      <Header title="Bikontakt" />
      <section className="flex flex-column flex-align-center m-t-20">
        <InputField icon={faSearch}>
          <input onChange={inputHandler} type="text" placeholder="Search..." />
        </InputField>
        <ContactList className="w-100" contacts={contacts}></ContactList>
      </section>
    </>
  );
};

export default App;
