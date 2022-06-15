import React, { createContext, useState, useContext, useCallback, useId } from "react";

const TaskContext = createContext({
  tasks: [],
  setTaskList: () => {},
  addTask: () => {},
});

const TasksProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);
  const id = useId()

  const setTaskList = useCallback((taskList) => {
    setTask(taskList);
  }, [])

  const addTask = (newTask) => {
    const task = {
      task_name: newTask,
      time_in_seconds: 0,
      id
    }
    setTask(prevValue => [...prevValue, task])
  };

  return (
    <TaskContext.Provider value={{ tasks, setTaskList, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export default TasksProvider;
