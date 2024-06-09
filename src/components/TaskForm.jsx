import { useContext, useState } from "react";
import { TasksContext } from "../context/TaskContext";

function TaskForm() {
  const { createTask } = useContext(TasksContext);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && desc) {
      createTask(title, desc);
      setTitle("");
      setDesc("");
    } else {
      alert("You have to fill all the fields");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-white mb-3">Create Task</h1>
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-5 rounded-md">
          <input
            className="bg-slate-300 p-3 w-full mb-2 rounded-md"
            type="text"
            placeholder="Enter your task"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="bg-slate-300 p-3 w-full mb-2 rounded-md"
            type="text"
            placeholder="Enter your task description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          ></textarea>
          <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Save Task</button>
        </form>
      </div>
    </>
  );
}

export default TaskForm;
