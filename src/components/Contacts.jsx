import React, { useContext } from "react";
import ContactContext from "../context/contact/ContactContext";
import Contactitem from "./Contactitem";

const Contacts = () => {
  const contactcontext = useContext(ContactContext);
  const { contacts } = contactcontext;

  if (contacts.length === 0) {
    return <p>Contact list is empty...</p>;
  }

  return (
    <div>
      {contactcontext.filtered !== null
        ? contactcontext.filtered.map((contact) => (
            <Contactitem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <Contactitem key={contact.id} contact={contact} />
          ))}
    </div>
  );
};

export default Contacts;
