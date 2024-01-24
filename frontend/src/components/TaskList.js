import React from "react";

function TaskList ({ taskList }) {
    const taskArr = Object.entries(taskList)

// when Add Task is submitted  by the user tasks are displayed by this component. 

// loops though the taskArr and diplay the tasks

return (
    <div className="container column">
            <div className="container column center-div">
                {taskArr.map((item) => (
                    <div 
                    key={item[0]}
                    className="font25 wt">
                        {item[1].date} {item[1].time} {item[1].task}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;