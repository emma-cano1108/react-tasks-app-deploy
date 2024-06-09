import TaskForm from "./components/TaskForm";
import Tasklist from "./components/Tasklist";


function App() {
  

  

  

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm/>
      <br />
      <Tasklist/>
      </div>
    </main>
  );
}

export default App;
