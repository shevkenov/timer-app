import Taskbar from "../components/Taskbar";
import Timer from "../components/Timer";
import { useTaskContext } from "../context/tasksContext";
import { useUserContext } from "../context/userContext"
import useTasks from "../hooks/useTasks";

export default function Home() {
  const { user } = useUserContext();
  const { addTask, setTaskChoosen, taskId, updateTask } = useTaskContext();

  const {tasks} = useTasks();

  return (
    <>
      {user?.username && `You are loged in as ${user?.username}` }
      <Taskbar tasks={tasks} addTask={addTask} setTask={setTaskChoosen}/>
      {
        taskId && <Timer updateTask={updateTask} taskId={taskId}/>
      }
    </>
  )
}
