import React, { createContext, useState, useContext, useCallback } from "react";

const TaskContext = createContext({
  tasks: [],
  setTaskList: () => {},
  addTask: (newTask) => {},
  updateTask: (taskId) => {},
  taskId: null,
  setTaskId: (taskId) => {}
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

    setTask(prevValue => [...prevValue, task])
  };

  const setTaskChoosen = (id) => {
    const taskFound = tasks.find(t => t.id === id);
    setTaskId(taskFound);
  }

  const updateTask = ({id, seconds}) => {
    const taskFound = tasks.find(t => t.id === id);
    const inxFound = tasks.findIndex(t => t.id === id);
    taskFound.time_in_seconds += seconds;

    setTask(prevVal => [...prevVal.slice(0, inxFound), ...prevVal.slice(inxFound+1, prevVal.length), taskFound]);
  }


  return (
    <TaskContext.Provider value={{ tasks, setTaskList, addTask, updateTask, taskId, setTaskChoosen }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export default TasksProvider;
