import React from "react";
import Rolling from "./Rolling.gif";
export default function Spinner() {
  return (
    <div>
      <img src={Rolling} alt="" style={{ display: "block", margin: "auto" }} />
    </div>
  );
}
