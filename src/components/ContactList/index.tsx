import { Contact, TContact } from "models/contact.model";
import ContactCard from "./ContactCard";
import "./index.scss";

const ContactList = ({ className = "", contacts }: Props) => {
  const content = contacts.map((item: TContact, index: number) => {
    return <ContactCard key={index} contact={new Contact(item)}></ContactCard>;
  });

  return <ul className={`contact-list ${className}`}>{content}</ul>;
};

type Props = { className?: string; contacts: TContact[] };

export default ContactList;
