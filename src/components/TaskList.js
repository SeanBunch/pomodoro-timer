import React from "react";

function TaskList ({ taskList }) {

// when Add Task is submitted the task should be displayed by this component. 
console.log("frorm tasklist", taskList)


    return (
        <div className="container column">
            <div className="center-div frame">
                {/* {taskList.map((item)=> {
                    <div key={item.id}>
                        {item.task}
                    </div>
})} */}


            </div>
        </div>
    );
};

export default TaskList;