import NavMenu from "components/NavMenu";
import { ContactsProvider } from "context/contacts.context";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./ContactPage";

import "./index.scss";

const App = () => {
  const navItems = [
    { name: "Contacts", path: "/" },
    { name: "Favorites", path: "/favorites" },
  ];

  return (
    <ContactsProvider>
      <header className="header">
        <h1 className="header__title">Bikontakt</h1>
      </header>
      <main className="flex flex-column flex-align-center m-t-20">
        <NavMenu className="m-b-50" items={navItems}></NavMenu>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/favorites" element={<ContactPage isFavoritesPage />} />
        </Routes>
      </main>
    </ContactsProvider>
  );
};

export default App;
