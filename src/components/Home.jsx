import React from "react";
import Contacts from "./Contacts";
const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6">contact form</div>

      <div className="col-md-6">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
