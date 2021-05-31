import React, { useContext } from "react";
import ContactContext from "../context/contact/ContactContext";

const Contactitem = ({ contact }) => {
  const contactcontext = useContext(ContactContext);

  const onDelete = () => {
    contactcontext.deleteContact(contact.id);
  };

  return (
    <div className="card contactcard">
      <div className="card-body">
        <h3>{contact.name}</h3>
        <span className="badge bg-info text-dark">
          {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
        </span>

        <ul className="list-group">
          {contact.email && (
            <li className="list-group-item">
              <i className="bi bi-envelope-fill"></i>&nbsp;
              {contact.email}
            </li>
          )}
          {contact.phone && (
            <li className="list-group-item">
              <i className="bi bi-phone-fill"></i>&nbsp;
              {contact.phone}
            </li>
          )}
        </ul>

        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            Edit
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="btn btn-outline-secondary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactitem;
