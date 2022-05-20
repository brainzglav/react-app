import { faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import Form from "components/Form";
import ContactsHttp from "http/contacts.http";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { parseUrlParams, validators } from "utils/generic.util";
import { TContact } from "models/contact.model";
import { useCallback, useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";

const EditPage = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();
  const { isReadonly } = parseUrlParams(search);
  const [contact, setContact] = useState(null);
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
    <Form onSubmit={submitHandler} preFill={contact} isDisabled={isReadonly}>
      <InputField
        className="w-px-150"
        label="First name:"
        icon={faUser}
        formControl={["name", validators({ required: true, maxLength: 20 })]}
      >
        <input type="text" placeholder="First name" />
      </InputField>
      <button>Submit</button>
    </Form>
  );
};

export default EditPage;
