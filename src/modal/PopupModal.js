import React, { useState } from "react";
import "../styling/Modal.css";

function PopupModal({ setShowCircle, timer, setTimer, setDuration }) {
  const [showModal, setShowModal] = useState(false);
  

  const openModal = () => {
    setShowCircle(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowCircle(true);
    setShowModal(false);
  };

  const changeHandler = (key, value) => {
    setTimer({ ...timer, [key]: parseInt(value) });
    setDuration(parseInt(value))
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the selected inputs
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal} className="bg-black bdr10 wt h30 w100px">
        Settings
      </button>
      {showModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="container column">
              <h1>Settings</h1>
              <form onSubmit={handleSubmit}>
                <div className="container row mb50">
                  <div>
                    <h2>Pomo Time</h2>
                    <input
                      type="number"
                      value={timer.pomoTime}
                      onChange={(e) => {changeHandler("pomoTime", e.target.value)}}
                      required
                    />
                  </div>
                  <div>
                    <h2>Short Break</h2>
                     <input
                       type="number"
                       value={timer.shortBreak}
                       onChange={(e) => {changeHandler("shortBreak", e.target.value)}}
                       required
                     />
                  </div>
                  <div>
                    <h2>Long Break</h2>
                     <input
                       type="number"
                       value={timer.longBreak}
                       onChange={(e) => {changeHandler("longBreak", e.target.value)}}
                       required
                     />
                  </div>
                </div>
                <div className="container space-btw">
                  <button
                    type="submit"
                    className="bg-black bdr10 wt h30 w100px"
                  >
                    Submit
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

export default PopupModal;
