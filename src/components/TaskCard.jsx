function TaskCard({ task, deleteT }) {
  return (
    <div className="bg-gray-800 text-white p-5 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-500 textsm">{task.desc}</p>

      <button
        className="bg-red-700 p-1 rounded-md mt-4 hover:bg-red-500" 
        onClick={() => deleteT(task.id)}
      >
        Delete task
      </button>
    </div>
  );
}

export default TaskCard;
