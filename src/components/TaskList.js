import React, {useState} from "react";
import Task from "./Task";

function TaskList({displayedTasks, selectedCategories, handleDeleteClick}) {
  return (
    <div className="tasks">
      {displayedTasks.map((task) => {
        return (selectedCategories.includes(task.category) || selectedCategories.includes("All") || selectedCategories.length == 0 ? 
          <Task key={task.text} task={task} handleDeleteButton={() => handleDeleteClick(task)}/> 
        : null)
      }
    )}
    </div>
  );
}

export default TaskList;