import React from "react";
import Contacts from "./Contacts";

import Form from "./Contactform";
import Contactfilter from "./contactfilter";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Form />
      </div>

      <div className="col-md-6">
        <Contactfilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
