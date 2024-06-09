import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../data/task';

export const TasksContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    const createTask = (title, desc) => {
        const newTask = {
          id: tasks.length,
          title: title,
          desc: desc,
        };
        
        setTasks([...tasks, newTask]);
    
      };
    
      const deleteTask = (id) => {
        setTasks(tasks.filter(task=>task.id !== id))
      }

    useEffect(() => {
        setTasks(data);
    }, []); 
    


  return (
    <>
    <TasksContext.Provider value={{
        tasks,
        createTask,
        deleteTask
    }}>

        {props.children}

    </TasksContext.Provider>
    
    
    </>
  )
}

