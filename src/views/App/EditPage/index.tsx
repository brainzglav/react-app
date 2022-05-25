import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import Form from "components/Form";
import ContactsHttp from "http/contacts.http";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { parseUrlParams, validators } from "utils/generic.util";
import { TContact } from "models/contact.model";
import { useCallback, useMemo, useState, useEffect } from "react";
import ImageFrame from "components/ImageFrame";
import { EMAIL_PATTERN } from "constants/errors.constants";
import Button from "components/Button";

const EditPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const { isReadonly } = parseUrlParams(search);
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    profilePicture: "",
    phoneNumber: "",
    emailAddress: "",
    isFavorite: false,
  });
  const contactsHttp = useMemo(() => new ContactsHttp(), []);

  const submitHandler = async (data: TContact) => {
    if (id) {
      await contactsHttp.replaceContact({ id, ...data });
    } else {
      await contactsHttp.createContact(data);
    }

    navigate("/");
  };

  const fetchContact = useCallback(async () => {
    const contact = await contactsHttp.getContact(+id);

    setContact(contact);
  }, [contactsHttp, id]);

  useEffect(() => {
    if (id) {
      fetchContact();
    }
  }, [fetchContact, id]);

  return (
    <Form
      className="flex flex-column flex-align-center"
      onSubmit={submitHandler}
      preFill={contact}
      isDisabled={isReadonly}
    >
      <ImageFrame
        className="m-b-20"
        imageUrl={contact?.profilePicture}
        size="medium"
        formControl={["profilePicture"]}
      ></ImageFrame>
      <InputField
        className="w-px-250"
        label="Name:"
        icon={faUser}
        formControl={["name", validators({ required: true, maxLength: 20 })]}
      >
        <input name="name" type="text" placeholder="Name" />
      </InputField>
      <InputField
        className="w-px-250"
        label="Surname:"
        icon={faUser}
        formControl={["surname", validators({ required: true, maxLength: 20 })]}
      >
        <input name="surname" type="text" placeholder="Surname" />
      </InputField>
      <InputField
        className="w-px-250"
        label="Email:"
        icon={faEnvelope}
        formControl={[
          "emailAddress",
          validators({ required: true, pattern: EMAIL_PATTERN }),
        ]}
      >
        <input name="email" type="text" placeholder="Email" />
      </InputField>
      <InputField
        className="w-px-250"
        label="Phone number:"
        icon={faPhone}
        formControl={["phoneNumber", validators({ required: true })]}
      >
        <input name="phone" type="text" placeholder="Phone number" />
      </InputField>

      <Button className="m-b-20">Submit</Button>
    </Form>
  );
};

export default EditPage;
