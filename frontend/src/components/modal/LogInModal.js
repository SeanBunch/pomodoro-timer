import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewAccountModal from "./NewAccountModal";
import "../../styling/Modal.css";

function LogInModal({ setShowCircle }) {
  const [ showModal, setShowModal ] = useState(false);

  const openModal = () => {
    setShowCircle(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowCircle(true);
    setShowModal(false);
  };

  const changeHandler = (task, value) => {
    const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    if (specialChars.test(value)) {
      alert(
        "Task must not include special characters !@#$%^&*()_+=[]{};':|,.<>/?~"
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <div>
      <Link to="http://localhost:5000/login/auth/google">
      <button
        // onClick={openModal}
        className="bg-black bdr10 wt  h30 w100px ml20 mr20"
      >
        Log in
      </button>
      </Link>
      {showModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="container column">
                <form onSubmit={handleSubmit}>
                  <div className="container column mb50">
                    <div>
                      <input
                        type="text"
                        className="noborder h50 font25 mb20"
                        // value={}
                        placeholder="Username"
                        onChange={(e) => {
                          changeHandler("task", e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="noborder h50 font25"
                        // value={}
                        placeholder="Password"
                        onChange={(e) => {
                          changeHandler("task", e.target.value);
                        }}
                        required
                      />
                    </div>
                    <p>
                      Don't have an account? Sign up here: <NewAccountModal /> 
                    </p>
                  </div>
                  <div className="container space-btw">
                    <button
                      type="submit"
                      className="bg-black bdr10 wt h30 w100px"
                    >
                      Log in
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-dkred bdr10 wt h30 w100px"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogInModal;
