import React from "react";

function TaskList ({ taskList }) {
    const taskArr = Object.entries(taskList)

// when Add Task is submitted the task should be displayed by this component. 
console.log("from tasklist:", taskArr)
// need to loop though the taskList obj and diplay the tasks
 


    return (
        <div className="container column">
            <div className="container column center-div">
                {taskArr.map((item) => (
                    <div className="font25 wt">
                        {item[1].task}
                    </div>
                ))}
               {/* {Object.entries(taskList).forEach((item) => (
        <div>
            {item[1].task}
        </div>

    ))} */}

            </div>
        </div>
    );
};

export default TaskList;