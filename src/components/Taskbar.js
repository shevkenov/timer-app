import React, { useState, useId } from "react";
import { useUserContext } from "../context/userContext";
import postFormData from "../utils/formData";
import Button from "./Button";
import { Input } from "./layout/Form";

const Taskbar = ({ tasks, addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [isNewTaskEnabled, setIsNewTaskEnabled] = useState(false);
  const {user} = useUserContext();

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = async() => {
    const token = localStorage.getItem("token");

    try {
      const result = await postFormData({url: "/api/add-task", method:"POST", data: {newTask, username: user.username, token}});
      if(result.result){
        addTask(newTask);
        setIsNewTaskEnabled(false);
        setNewTask("")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {!isNewTaskEnabled ? (
        <>
          <select className="mr-4 p-2 border" name="task" id="task">
            <option disabled hidden value="">
              -- Choose a task --
            </option>
            {tasks.length &&
              tasks.map((task) => {
                return (
                  <option key={task.id} value={task.task_name}>
                    {task.task_name}
                  </option>
                );
              })}
          </select>

          <Button
            color="primary"
            extraClasses="mx-1"
            handleClick={() => setIsNewTaskEnabled(true)}
          >
            New Task
          </Button>
        </>
      ) : (
        <>
          <Input
            inputType="text"
            inputName="new task"
            handleChange={handleChange}
            value={newTask}
            placeHolder="Add new task ..."
            extraClasses="mx-1"
          />
          <Button color="primary" extraClasses="mx-1" handleClick={addNewTask}>
            Add Task
          </Button>
          <Button
            color="secondary"
            extraClasses="mx-1"
            handleClick={() => setIsNewTaskEnabled(false)}
          >
            Cancel
          </Button>
        </>
      )}
    </div>
  );
};

export default Taskbar;
