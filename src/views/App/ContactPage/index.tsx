import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactList from "components/ContactList";
import InputField from "components/InputField";
import { ContactsContext, ContactsProvider } from "context/contacts.context";
import ContactsHttp from "http/contacts.http";
import { useContext } from "react";
import { ChangeEvent, useMemo, useCallback, useEffect } from "react";

const ContactPage = ({ isFavorites }: Props) => {
  const { contacts, setContacts } = useContext(ContactsContext);

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
    [contactsHttp, setContacts]
  );

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const filteredContacts = isFavorites
    ? contacts.filter(({ isFavorite }) => isFavorite)
    : contacts;

  return (
    <ContactsProvider>
      <InputField className={isFavorites ? "hidden" : ""} icon={faSearch}>
        <input onChange={inputHandler} type="text" placeholder="Search..." />
      </InputField>
      <ContactList className="w-100" contacts={filteredContacts}></ContactList>
    </ContactsProvider>
  );
};

type Props = {
  isFavorites?: boolean;
};

export default ContactPage;
