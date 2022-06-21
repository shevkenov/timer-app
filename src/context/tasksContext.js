import React, { createContext, useState, useContext, useCallback } from "react";
import postFormData from "../utils/formData";

const TaskContext = createContext({
  tasks: [],
  setTaskList: () => {},
  addTask: (newTask) => {},
  updateTask: (taskId) => {},
  taskId: null,
  setTaskId: (taskId) => {},
  removeTask: (taskId) => {},
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

  const removeTask = async({id, token}) => {
    
    try {
      const {result} = await postFormData({url: "/api/removeTask", data: {id, token}, method:"post"});

      const inxFound = tasks.findIndex(t => t.id === result.deleted_hashes[0]);
      setTask(prevVal => [...prevVal.slice(0, inxFound), ...prevVal.slice(inxFound+1, prevVal.length)]);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, setTaskList, addTask, updateTask, taskId, setTaskChoosen, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
    return useContext(TaskContext);
}

export default TasksProvider;
