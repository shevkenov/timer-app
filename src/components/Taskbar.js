import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "../context/userContext";
import postFormData from "../utils/formData";
import Button from "./Button";
import { Input } from "./layout/Form";
import useTimer from "../hooks/useTimer";

const Taskbar = ({ tasks, addTask, setTask }) => {
  const [newTask, setNewTask] = useState("");
  const [isNewTaskEnabled, setIsNewTaskEnabled] = useState(false);
  const [taskChoosen, setTaskChoosen] = useState()
  const {user} = useUserContext();
  const router = useRouter();

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSelect = (e) => {
    if(!e.target.value) return;

    setTaskChoosen(e.target.value);
    setTask(e.target.value);
  }

  const handleClick = () => {
    if(!user){
      router.push("/login");
      return;
    }
    setIsNewTaskEnabled(true);
  }

  const addNewTask = async() => {
    try {
      const result = await postFormData({url: "/api/add-task", method:"POST", data: {newTask, username: user.username, token: user.token}});
      if(result.result){
        addTask({task_name: newTask, id: result.result.inserted_hashes[0]});
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
          <select className="mr-4 p-2 border" name="task" id="task" value={taskChoosen} onChange={handleSelect}>
            <option value="">
              -- Choose a task --
            </option>
            {tasks.length &&
              tasks.map((task) => {
                return (
                  <option key={task.id} value={task.id}>
                    {task.task_name}
                  </option>
                );
              })}
          </select>

          <Button
            color="primary"
            extraClasses="mx-1"
            handleClick={handleClick}
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
