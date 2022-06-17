import React, { createContext, useState, useContext, useCallback } from "react";

const TaskContext = createContext({
  tasks: [],
  setTaskList: () => {},
  addTask: () => {},
  updateTask: () => {},
  taskId: null
});

const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const [taskId, setTaskId] = useState(null);

  const setTaskList = useCallback((taskList) => {
    setTask(taskList);
  }, [])

  const addTask = (newTask) => {
    const task = {
      ...newTask,
      time_in_seconds: 0,
    }

    console.log(task)
    setTask(prevValue => [...prevValue, task])
  };

  const updateTask = ({id, seconds}) => {
    const taskFound = tasks.find(t => t.id === id);
    const inxFound = tasks.indexOf(t => t.id === id);
    taskFound.time_in_seconds += seconds;
    
    setTaskList(prevVal => [...prevVal.slice(0, inxFound), ...prevVal.slice(inxFound+1, prevVal.length), taskFound]);
  }


  return (
    <TaskContext.Provider value={{ tasks, setTaskList, addTask, updateTask, taskId, setTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export default TasksProvider;
