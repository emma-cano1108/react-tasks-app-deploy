import { useContext } from "react";
import { TasksContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function Tasklist() {


  const {tasks, deleteTask} = useContext(TasksContext)


  if (tasks.length === 0) {
    
    return (
    <>
      <h1 className="text-white text-5xl font-bold text-center mb-5">Task List</h1>
      <h1 className="text-white text-4xl font-bold text-center">There are no tasks yet</h1>
    </>
  )
  }

  return (
    <>
    <h1 className="text-white text-5xl font-bold text-center mb-5">Task List</h1>
    <div className="grid grid-cols-4 gap-2">
      
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} deleteT={deleteTask} />;
      })}
    </div>
    </>
  );
}

export default Tasklist;
