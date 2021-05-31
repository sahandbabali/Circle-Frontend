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
    currentContact: null,
    filtered: null,
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
  const setcurrentcontact = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // clear current
  const clearcurrentcontact = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //update contact

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // filter contacts
  const filtercontacts = (filterterm) => {
    dispatch({ type: FILTER_CONTACTS, payload: filterterm });
  };

  // clear filter
  const clearfilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setcurrentcontact,
        clearcurrentcontact,
        updateContact,
        filtercontacts,
        clearfilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
