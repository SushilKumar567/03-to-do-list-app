import React, { useState, useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./style.css";
import icon from "./images/icon.png";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) {
      alert("Please add a task!");
      return;
    }
    setTasks([...tasks, { text: input, checked: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-c1">
      <div className="m-8 min-h-[90vh] min-w-[25%] bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-center text-3xl font-bold text-c2 mb-6">
          To-Do List
          <img src={icon} alt="" className="inline-block w-12 ml-2" />
        </h2>
        <div className="flex items-center border border-blue-300 rounded-lg mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add your tasks"
            className="border-0 flex-grow bg-c3 border-none rounded-lg outline-none p-2 text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-c4 text-white rounded-lg hover:bg-c2 transition duration-200"
          >
            Add
          </button>
        </div>
        <ol className="list-none">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`relative flex justify-between items-center py-3 px-2 rounded-md cursor-pointer transition-colors duration-200 ${
                task.checked
                  ? "line-through text-gray-500 bg-blue-100"
                  : "text-black hover:bg-gray-100"
              }`}
              onClick={() => toggleTask(index)}
            >
              <span className="flex-1 flex items-center">
                {task.checked && <FaCheck className="text-green-500 mr-2" />}
                {task.text}
              </span>
              <FaTimes
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTask(index);
                }}
                className="text-xl text-blue-700 hover:text-red-500 cursor-pointer"
              />
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default ToDoList;
