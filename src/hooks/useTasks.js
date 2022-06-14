import { useState, useEffect } from "react";
import { useUserContext } from "../context/userContext";
import harperFetchTasks from "../utils/harperDB/harperFetchTasks";

export default function useTasks() {
    const [taskList, setTaskList] = useState([]);
    const user = useUserContext();

    useEffect(() => {
        if(!user) return

        
        const getTasks = async() => {
            const tasks = await harperFetchTasks();
            setTaskList(tasks);
        }
        getTasks();
    },[user]);

    return {taskList}
}