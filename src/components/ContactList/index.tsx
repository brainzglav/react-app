import { Contact, TContact } from "models/contact.model";
import ContactCard from "./ContactCard";

import "./index.scss";
import "./ContactCard/index.scss";
import ImageFrame from "components/ImageFrame";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ContactList = ({ className = "", contacts, hasAdd }: Props) => {
  const navigate = useNavigate();
  const content = contacts.map((item: TContact) => {
    return (
      <li key={item.id}>
        <ContactCard contact={new Contact(item)}></ContactCard>
      </li>
    );
  });

  const addCard = (
    <li>
      <article
        className="contact-card flex-center"
        onClick={() => navigate("/create")}
      >
        <ImageFrame icon={faAdd} />
      </article>
    </li>
  );

  return (
    <ul className={`contact-list ${className}`}>
      {hasAdd && addCard}
      {content}
    </ul>
  );
};

type Props = { className?: string; contacts: TContact[]; hasAdd?: boolean };

export default ContactList;
