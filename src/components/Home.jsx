import React, { useContext, useEffect } from "react";
import Contacts from "./Contacts";
import AuthContext from "../context/auth/AuthContext";

import Form from "./Contactform";
import Contactfilter from "./contactfilter";

const Home = () => {
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    authcontext.loaduser();
  }, []);
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
