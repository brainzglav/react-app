import { Contact, TContact } from "models/contact.model";
import ContactCard from "./ContactCard";
import "./index.scss";

const ContactList = ({ contacts }: Props) => {
  const content = contacts.map((item: TContact) => {
    return <ContactCard contact={new Contact(item)}></ContactCard>;
  });

  return <ul>{content}</ul>;
};

type Props = { contacts: TContact[] };

export default ContactList;
