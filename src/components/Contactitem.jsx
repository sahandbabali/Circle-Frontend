import React from "react";

const Contactitem = ({ contact }) => {
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

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">
            Edit
          </button>
          <button type="button" class="btn btn-outline-secondary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactitem;
