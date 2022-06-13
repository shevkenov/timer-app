import { createContext, useState } from "react";
import { useContext } from "react";
import { useUser } from "../hooks/useUser";

const UserContext = createContext({
    username: "",
    setUsername: (username) => {}
});

export const Provider = ({children}) => {
    //const [username, setUsername] = useState("");
    const {username, setUsername} = useUser();
    console.log(username)

    return (<UserContext.Provider value={{username, setUsername}}>{children}</UserContext.Provider>)
}

export const useUserContext = () => {
    return useContext(UserContext);
} 