import React from "react";
import { Link } from "react-router-dom";
import "../../styling/Modal.css";
import { useSelector } from "react-redux";
import LoginLink from "../LoginBtn";
import LogoutBtn from "../LogoutBtn";

function LogInModal() {

//   const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value)


  return (
    <div>
      {user.isAuthenticated ? (<LogoutBtn />) : (<LoginLink />) }
    </div>
  );
};

export default LogInModal;
