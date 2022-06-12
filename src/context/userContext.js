import { createContext, useState } from "react";
import { useContext } from "react";

const UserContext = createContext({
    username: "",
    setUsername: (username) => {}
});

export const Provider = ({children}) => {
    const [username, setUsername] = useState("");

    return (<UserContext.Provider value={{username, setUsername}}>{children}</UserContext.Provider>)
}

export const useUserContext = () => {
    return useContext(UserContext);
} 