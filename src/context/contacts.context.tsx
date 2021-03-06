import { Contact } from "models/contact.model";
import { useState, createContext } from "react";

const ContactsContext = createContext({
  contacts: [],
  setContacts: (contacts: Contact[]) => {},
});

const ContactsProvider = ({ children }: Props) => {
  const [contacts, setContacts] = useState([]);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

type Props = {
  children: any;
};

export { ContactsContext, ContactsProvider };
