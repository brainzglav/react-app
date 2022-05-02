import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageFrame from "components/ImageFrame";
import { Contact } from "models/contact.model";
import "./index.scss";

const ContactCard = ({ contact }: Props) => {
  const { fullName, profilePicture, phoneNumber, emailAddress } = contact;

  return (
    <li className="contact-card">
      <ImageFrame imageUrl={profilePicture}></ImageFrame>
      <h3>{fullName}</h3>

      <div className="contact-card__info">
        <div>
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray" />
          <span>{emailAddress}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} size="lg" color="gray" />
          <span>{phoneNumber}</span>
        </div>
      </div>
    </li>
  );
};

type Props = {
  contact: Contact;
};

export default ContactCard;
