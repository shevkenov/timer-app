import { useUserContext } from "../context/userContext"
import useTasks from "../hooks/useTasks";

export default function Home() {
  const {user} = useUserContext();

  //const tasks = useTasks();
  return (
    <>
      {user?.username && `You are loged in as ${user?.username}` }
      <h1>Hello World</h1>
    </>
  )
}
