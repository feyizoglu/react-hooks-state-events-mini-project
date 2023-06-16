import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("All");

  const categoryList = categories.map((category) => {
    return (
      <option key={category}>
        {category}
      </option>
    )
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({
      text: text,
      category: category,
    })
    setText("");
    setCategory("All")
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;