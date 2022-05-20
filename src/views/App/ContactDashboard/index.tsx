import NavMenu from "components/NavMenu";
import { ContactsProvider } from "context/contacts.context";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactPage from "./ContactPage";

const ContactDashboard = () => {
  const navItems = [
    { name: "Contacts", path: "all" },
    { name: "Favorites", path: "favorites" },
  ];

  return (
    <ContactsProvider>
      <NavMenu className="m-b-50" items={navItems}></NavMenu>
      <Routes>
        <Route path="*" element={<Navigate to="all" replace />} />
        <Route path="all" element={<ContactPage />} />
        <Route path="favorites" element={<ContactPage isFavoritesPage />} />
      </Routes>
    </ContactsProvider>
  );
};

export default ContactDashboard;
