// 3. Create a to-do list component where users can add, remove, and mark items as complete.

import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, done: false }]);
      setTask("");
    }
  };

  const toggleDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-bold mb-4">🔎To-Do List</h2>
      <div className="flex space-x-2 mb-4">
        <input value={task} onChange={(e) => setTask(e.target.value)} className="flex-1 border px-3 py-2 rounded" placeholder="New task" />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">💻 Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="flex justify-between items-center border-b py-1">
            <span className={t.done ? "line-through text-gray-400" : ""} onClick={() => toggleDone(i)}>
              {t.text}
            </span>
            <button onClick={() => deleteTask(i)} className="text-red-600">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
