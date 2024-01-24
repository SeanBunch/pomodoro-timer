import React, { useState } from "react";
import RandomIdGenerator from "../../utilities/RandomIdGenerator";
import "../../styling/Modal.css";

function AddTaskModal({ taskList, setTaskList }) {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ 
    date: "", 
    time: "", 
    task: "", 
    status: false 
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const changeHandler = (task, value) => {
    // removed the " : " out of the special caracter list. 
    // The original was this: const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/;
    const specialChars = /[`!@#$%^&*()_+\=\[\]{};'"\\|,.<>\/?~]/;
    if (specialChars.test(value)) {
      alert(
        "Task must not include special characters !@#$%^&*()_+=[]{};':|,.<>/?~"
      );
    } else {
      setNewTask((newTask) => ({ ...newTask, [task]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = RandomIdGenerator();
    setTaskList({ ...taskList, [newId]: newTask });

    closeModal();
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bdr10 bg-purple wt w100 h50 btnborder-blk font25"
      >
        +Add Task
      </button>
      {showModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="container column">
                <form onSubmit={handleSubmit}>
                  <div className="container row mb50">
                    <div className="container column">
                      <input
                        type="date"
                        className="noborder h50 font25"
                        value={taskList.date}
                        onChange={(e) => {
                        changeHandler("date", e.target.value);
                        }}
                      />
                      <input
                        type="time"
                        className="noborder h50 font25"
                        value={taskList.date}
                        onChange={(e) => {
                        changeHandler("time", e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        className="noborder h50 font25"
                        value={taskList.task}
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

export default AddTaskModal;
