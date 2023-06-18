import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({text: "", category: "Code"});

  function handleChange(event){
    setFormData(() => ({...formData, [event.target.name]: event.target.value}))
  }

  return (
    <form className="new-task-form" onSubmit={(event) => onTaskFormSubmit(event, formData)}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categories.map(category => {
            return (category != "All" ?
              <option key={category} value={category}>{category}</option>
            : null)
          }
        )}
        </select>
      </label>
      <input type="submit" name="text"/>
    </form>
  );
}

export default NewTaskForm;