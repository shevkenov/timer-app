import { useState } from 'react';
import { LabelAndInput } from './layout/Form';
import postFormData from "../utils/formData";
import Button from "./Button";
import Alert from './Alert';
import { useRouter } from "next/router";
import { useUserContext } from '../context/userContext';

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
    const user = useUserContext();

    const handleSubmit = async(e) => {
        setError("");
        e.preventDefault();
        const credentials = {
            username,
            password,
            repeatPassword
        }
        const response = await postFormData({data: credentials, url: "/api/signup", method: "POST"})
        if(response.error){
          setError(response.error);

          return;
        }

        localStorage.setItem("token", response.token);
        user.setUsername(username);
        router.push("/");
    }

  return (
    <form onSubmit={handleSubmit}>
        <LabelAndInput label="Username" value={username} handleChange={(e) => setUsername(e.target.value)} inputType="text" inputName="username"/>
        <LabelAndInput label="Password" value={password} handleChange={(e) => setPassword(e.target.value)} inputType="password" inputName="password"/>
        <LabelAndInput label="Confirm Password" value={repeatPassword} handleChange={(e) => setRepeatPassword(e.target.value)} inputType="password" inputName="password1"/>
        <Button extraClasses="w-full mt-3 py-3 font-semibold" color="success">Create Account</Button>
        {
          error && <Alert type="danger">{error}</Alert>
        }
    </form>
  )
}

export default SignupForm