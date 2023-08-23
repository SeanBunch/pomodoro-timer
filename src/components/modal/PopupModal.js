import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDuration, setPomoTime, setShortBreak, setLongBreak } from "../circleTimerSlice";
import "../../styling/Modal.css";

function PopupModal({ setShowCircle }) {
  const [ showModal, setShowModal ] = useState(false);
  const timer = useSelector((state) => state.circleTimer.value);
  const dispatch = useDispatch();

  const openModal = () => {
    setShowCircle(false);
    setShowModal(true);
  };

  const closeModal = () => {
    dispatch(setDuration(timer.pomoTime));
    setShowCircle(true);
    setShowModal(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
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
                      onChange={(e) => dispatch(setPomoTime(e.target.value))}
                      required
                    />
                  </div>
                  <div>
                    <h2>Short Break</h2>
                     <input
                       type="number"
                       value={timer.shortBreak}
                       onChange={(e) => dispatch(setShortBreak(e.target.value))}
                       required
                     />
                  </div>
                  <div>
                    <h2>Long Break</h2>
                     <input
                       type="number"
                       value={timer.longBreak}
                       onChange={(e) => dispatch(setLongBreak(e.target.value))}
                       required
                     />
                  </div>
                </div>
                <div className="container space-btw">
                  <button
                    type="submit"
                    onClick={closeModal}
                    className="bg-black bdr10 wt h30 w100px"
                  >
                    Confirm
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
