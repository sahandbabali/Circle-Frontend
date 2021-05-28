import React from "react";
import Contacts from "./Contacts";

import Form from "./Contactform";

const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Form />
      </div>

      <div className="col-md-6">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
