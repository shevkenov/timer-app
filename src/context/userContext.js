import { createContext, useState } from "react";
import { useContext } from "react";
import { useUser } from "../hooks/useUser";

const UserContext = createContext({
    username: "",
    setUsername: (username) => {}
});

export const Provider = ({children}) => {
    //const [username, setUsername] = useState("");
    const {user, setUser} = useUser();

    return (<UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>)
}

export const useUserContext = () => {
    return useContext(UserContext);
} 