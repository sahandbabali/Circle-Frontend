import react, { useReducer } from "react";
// import { v4 as uuidv4 } from "uuid";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import axios from "axios";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [],
    currentContact: null,
    filtered: null,
    error: null,
  };
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // actions

  // add contact
  const addContact = async (contact) => {
    // contact.id = uuidv4();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (error) {
      dispatch({ type: CONTACT_ERROR, payload: error.response.data.msg });
    }
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
        error: state.error,
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
