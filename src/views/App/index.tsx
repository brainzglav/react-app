import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactList from "components/ContactList";
import Header from "components/Header";
import InputField from "components/InputField";
import NavMenu from "components/NavMenu";
import ContactsHttp from "http/contacts.http";
import { Contact } from "models/contact.model";
import { ChangeEvent, useMemo, useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const navItems = [
    { name: "Contacts", path: "/" },
    { name: "Favorites", path: "/favorites" },
  ];

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

  const contactPage = (isFavorites: boolean) => {
    const filteredContacts = isFavorites
      ? contacts.filter(({ isFavorite }) => isFavorite)
      : contacts;

    return (
      <>
        <InputField className={isFavorites ? "hidden" : ""} icon={faSearch}>
          <input onChange={inputHandler} type="text" placeholder="Search..." />
        </InputField>
        <ContactList
          className="w-100"
          contacts={filteredContacts}
        ></ContactList>
      </>
    );
  };

  return (
    <>
      <Header title="Bikontakt" />
      <section className="flex flex-column flex-align-center m-t-20">
        <NavMenu className="m-b-50" items={navItems}></NavMenu>

        <Routes>
          <Route path="/" element={contactPage(false)} />
          <Route path="/favorites" element={contactPage(true)} />
        </Routes>
      </section>
    </>
  );
};

export default App;
