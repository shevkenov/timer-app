import { useUserContext } from "../context/userContext"
import useTasks from "../hooks/useTasks";

export default function Home() {
  const {username} = useUserContext();
  const tasks = useTasks();
  return (
    <>
      {`You are loged in as ${username.username}` }
      <h1>Hello World</h1>
    </>
  )
}
