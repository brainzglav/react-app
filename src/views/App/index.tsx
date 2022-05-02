import ContactList from "components/ContactList";
import Header from "components/Header";
import { TContact } from "models/contact.model";

const contacts: TContact[] = [
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
];

const App = () => {
  return (
    <>
      <Header title="Bikontakt"></Header>
      <ContactList contacts={contacts}></ContactList>
    </>
  );
};

export default App;
