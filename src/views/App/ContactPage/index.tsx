import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactList from "components/ContactList";
import InputField from "components/InputField";
import { ContactsContext } from "context/contacts.context";
import ContactsHttp from "http/contacts.http";
import { useContext } from "react";
import { ChangeEvent, useMemo, useCallback, useEffect } from "react";

const ContactPage = ({ isFavoritesPage }: Props) => {
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
  }, [fetchContacts, isFavoritesPage]);

  const filteredContacts = isFavoritesPage
    ? contacts.filter(({ isFavorite }) => isFavorite)
    : contacts;

  return (
    <>
      <InputField className={isFavoritesPage ? "hidden" : ""} icon={faSearch}>
        <input onChange={inputHandler} type="text" placeholder="Search..." />
      </InputField>
      <ContactList className="w-100" contacts={filteredContacts}></ContactList>
    </>
  );
};

type Props = {
  isFavoritesPage?: boolean;
};

export default ContactPage;
