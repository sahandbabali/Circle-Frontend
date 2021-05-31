import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../context/contact/ContactContext";

const Contactfilter = () => {
  const contactcontext = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (contactcontext.filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      contactcontext.filtercontacts(e.target.value);
    } else {
      contactcontext.clearfilter();
    }
  };

  return (
    <form id="contactfilter">
      <div className="form-group">
        <input
          ref={text}
          type="text"
          class="form-control"
          onChange={onChange}
          id="contactfilter"
          aria-describedby="filter"
          placeholder="Filter contacts ..."
        />
      </div>
    </form>
  );
};

export default Contactfilter;
