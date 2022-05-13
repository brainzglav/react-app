import { ContactsProvider } from "context/contacts.context";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./ContactPage";
import EditPage from "./EditPage";

import "./index.scss";

const App = () => {
  return (
    <ContactsProvider>
      <header className="header">
        <h1 className="header__title">Bikontakt</h1>
      </header>
      <main className="flex flex-column flex-align-center m-t-20">
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/favorites" element={<ContactPage isFavoritesPage />} />
          <Route path="/create" element={<EditPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </main>
    </ContactsProvider>
  );
};

export default App;
