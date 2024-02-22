import React from "react";
import { Link } from "react-router-dom";
import "../styling/Modal.css";

function LogoutBtn() {

    return (
    <div>
      {/* <Link to="http://localhost:5000/login/logout"> */}
      <button
        className="bg-black bdr10 wt  h30 w100px ml20 mr20"
      >
        Log out
      </button>
      {/* </Link> */}
    </div>
  );
}

export default LogoutBtn;