import React, { useContext } from "react";
import ContactContext from "../context/contact/ContactContext";
import Contactitem from "./Contactitem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Contacts = () => {
  const contactcontext = useContext(ContactContext);
  const { contacts } = contactcontext;

  if (contacts.length === 0) {
    return <p>Contact list is empty...</p>;
  }

  return (
    <div>
      <TransitionGroup>
        {contactcontext.filtered !== null
          ? contactcontext.filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <Contactitem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <Contactitem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

export default Contacts;
