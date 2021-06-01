import React, { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";

const Alerts = () => {
  const alertcontext = useContext(AlertContext);
  console.log(alertcontext.alerts.length);
  return (
    alertcontext.alerts.length > 0 &&
    alertcontext.alerts.map((alert) => (
      <div key={alert.id} className="alert alert-warning" role="alert">
        <i class="bi bi-exclamation-circle"></i> <span>{alert.msg}</span>
      </div>
    ))
  );
};

export default Alerts;
