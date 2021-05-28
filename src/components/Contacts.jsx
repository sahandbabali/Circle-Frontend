import React, { useContext } from "react";
import ContactContext from "../context/contact/ContactContext";
import Contactitem from "./Contactitem";
const Contacts = () => {
  const contactcontext = useContext(ContactContext);
  const { contacts } = contactcontext;
  return (
    <div>
      {contacts.map((contact) => (
        <Contactitem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
