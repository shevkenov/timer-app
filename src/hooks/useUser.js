import { useState, useEffect } from 'react' 
import postFormData from '../utils/formData';

export const useUser = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token){
            tryToLogin(token);
        }
        async function tryToLogin(token){
            const result = await postFormData({url: "/api/user-info", method:"POST", data: token});
            if(result){
                setUsername(result.user)
            }
        }

    },[]);

    return {username, setUsername};
}