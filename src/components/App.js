import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [displayedTasks, setDisplayedTasks] = useState(TASKS);

  function handleClick(deleteTask){
    setDisplayedTasks(() => 
      displayedTasks.filter(task => task != deleteTask)
    )
  }

  function selectCategoryClick(category){
    if (selectedCategories.includes(category)){
      setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory != category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  function handleSubmit(event, task){
    event.preventDefault();
    setDisplayedTasks(() => ([...displayedTasks, task]))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categorySelect={selectCategoryClick} selectedCategories={selectedCategories}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList handleDeleteClick={handleClick} displayedTasks={displayedTasks} selectedCategories={selectedCategories}/>
    </div>
  );
}

export default App;