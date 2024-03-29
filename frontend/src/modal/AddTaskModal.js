import React, { useState } from "react";
import RandomIdGenerator from "../utilities/RandomIdGenerator"
import "./Modal.css";

function AddTaskModal({ taskList, setTaskList }) {
  const [ showModal, setShowModal ] = useState(false);
  const [ newTask, setNewTask ] = useState("")

  const openModal = () => {
    // setShowCircle(false);
    setShowModal(true);
  };

  const closeModal = () => {
    // setShowCircle(true);
    setShowModal(false);
  };

 
  const changeHandler = (e) => {
      setNewTask(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const newId = RandomIdGenerator();
      setTaskList((taskList) => ({...taskList, [newId]: {
        task: newTask, 
        complete: false
      }}));

    closeModal();
  };
  const deleteHandler = () => {

  }

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
                  <div>
                    <input
                      type="text"
                      className="noborder h50 font25"
                      value={newTask.task}
                      placeholder="What are you workin on?"
                      onChange={changeHandler}

                      required
                    />
                  </div>
                </div>
                <div className="container space-btw">
                  <button
                    onClick={deleteHandler}
                    className="bdr10 bt h30 w100px"
                  >
                    Delete
                  </button>
                  <button
                    onClick={closeModal}
                    className="bdr10 bt h30 w100px"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-black bdr10 wt h30 w100px"
                  >
                    Save
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
