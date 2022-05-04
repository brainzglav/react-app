import {
  faEnvelope,
  faHeart,
  faPencil,
  faPhone,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageFrame from "components/ImageFrame";
import { Contact } from "models/contact.model";
import "./index.scss";

const ContactCard = ({ contact }: Props) => {
  const { fullName, profilePicture, phoneNumber, emailAddress } = contact;

  return (
    <li className="contact-card">
      <FontAwesomeIcon
        className="contact-card__icon"
        icon={faTrash}
        size="lg"
        color="gray"
      />
      <div className="contact-card__icon contact-card__icon--right">
        <FontAwesomeIcon
          className="m-r-5"
          icon={faHeart}
          size="lg"
          color="gray"
        />
        <FontAwesomeIcon icon={faPencil} size="lg" color="gray" />
      </div>
      <ImageFrame imageUrl={profilePicture}></ImageFrame>
      <h3>{fullName}</h3>

      <div className="contact-card__info">
        <div className="flex">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="gray" />
          <span>{emailAddress}</span>
        </div>
        <div className="flex">
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
