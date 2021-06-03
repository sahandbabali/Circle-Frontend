import React, { useContext, useEffect } from "react";
import ContactContext from "../context/contact/ContactContext";
import Contactitem from "./Contactitem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "./Spinner";
const Contacts = () => {
  const contactcontext = useContext(ContactContext);
  const { contacts, getcontacts, loading } = contactcontext;

  useEffect(() => {
    getcontacts();
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
    return <p>Contact list is empty...</p>;
  }

  return (
    <div>
      {contacts !== null && !loading ? (
        <TransitionGroup>
          {contactcontext.filtered !== null
            ? contactcontext.filtered.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <Contactitem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map((contact) => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames="item"
                >
                  <Contactitem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Contacts;
