import React, { useState } from "react";
import "../../styling/Modal.css";

function NewAccountModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
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
    <div className="center-div">
      <button
        onClick={openModal}
        className="bg-black bdr10 wt h30 w100px"
      >
        Sign Up
      </button>
      {showModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="container column">
                <form onSubmit={handleSubmit}>
                  <div className="container row mb50">
                    <div>
                      <input
                        type="text"
                        className="noborder h50 font25"
                        placeholder="What are you workin on?"
                        onChange={(e) => {
                          changeHandler("task", e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="container space-btw">
                    <button
                      type="submit"
                      className="bg-black bdr10 wt h30 w100px"
                    >
                      Save
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

export default NewAccountModal;