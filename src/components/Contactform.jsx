import React, { useState, useContext } from "react";
import ContactContext from "../context/contact/ContactContext";

const Contactform = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const contactcontext = useContext(ContactContext);

  const onChange = (e) => {
    console.log("changed");
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    contactcontext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
  };

  return (
    <div className="card contactform">
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          {/* email */}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>
          {/* Phone */}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={onChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          ></input>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="flexRadioDefault1"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Personal
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="type"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Profesional
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Create contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactform;
