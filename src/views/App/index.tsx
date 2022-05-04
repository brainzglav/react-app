import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ContactList from "components/ContactList";
import Header from "components/Header";
import InputField from "components/InputField";
import { formatSearchQuery } from "components/utils/generic.util";
import { Contact } from "models/contact.model";
import { ChangeEvent, useState } from "react";

const _contacts: Contact[] = [
  {
    name: "Bikonja",
    surname: "Bikic",
    profilePicture:
      "https://cdn.agroklub.com/upload/images/text/thumb/bik9-880x495.jpg",
    phoneNumber: "+3853213213",
    emailAddress: "bikonja.bikic@gmail.com",
  },
  {
    name: "Mercedes",
    surname: "Bikic",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "mercedes.bikic@gmail.com",
  },
  {
    name: "Torpedo",
    surname: "Horvat",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "torpedo1950@gmail.com",
  },
  {
    name: "Torpedo",
    surname: "Horvat",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "torpedo1950@gmail.com",
  },
  {
    name: "Torpedo",
    surname: "Horvat",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "torpedo1950@gmail.com",
  },
  {
    name: "Torpedo",
    surname: "Horvat",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "torpedo1950@gmail.com",
  },
  {
    name: "Torpedo",
    surname: "Horvat",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "torpedo1950@gmail.com",
  },
  {
    name: "Torpedo",
    surname: "Horvat",
    profilePicture: "",
    phoneNumber: "+3853213213",
    emailAddress: "torpedo1950@gmail.com",
  },
].map((contact) => new Contact(contact));

const App = () => {
  const [contacts, setContacts] = useState(_contacts);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    const filteredContacts = _contacts.filter(({ fullName }) =>
      formatSearchQuery(fullName).includes(formatSearchQuery(term))
    );

    setContacts(filteredContacts);
  };

  return (
    <>
      <Header title="Bikontakt"></Header>
      <section className="flex flex-column flex-align-center m-t-20">
        <InputField onChange={inputHandler} type="text" icon={faSearch} />
        <ContactList className="w-100" contacts={contacts}></ContactList>
      </section>
    </>
  );
};

export default App;
