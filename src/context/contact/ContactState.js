import react, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "name1",
        email: "email1@name.com",
        phone: "111 111 111",
        type: "personal",
      },
      {
        id: 2,
        name: "name2",
        email: "email2@name.com",
        phone: "222 222 222",
        type: "personal",
      },
      {
        id: 3,
        name: "name3",
        email: "email3@name.com",
        phone: "333 333 333",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // actions

  // add contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // delete contact

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //set current

  // clear current

  //update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
