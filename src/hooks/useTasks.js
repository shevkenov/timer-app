import { useState, useEffect } from "react";
import { useTaskContext } from "../context/tasksContext";
import { useUserContext } from "../context/userContext";
import postFormData from "../utils/formData";

export default function useTasks() {
    const {tasks, setTaskList} = useTaskContext();
    const {user} = useUserContext();
    
    useEffect(() => {
        if(!user) return
        const token = localStorage.getItem("token");

        const getTasks = async() => {
            const {result} = await postFormData({method: "POST", url: "/api/fetch-tasks", data: {username: user.username, token}})
            setTaskList(result);
        }
        getTasks();
    },[user, setTaskList]);

    return {tasks}
}