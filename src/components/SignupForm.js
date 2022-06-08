import { useState } from 'react'
import { LabelAndInput } from './layout/Form'
import Button from "./Button"

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
        <LabelAndInput label="Username" value={username} handleChange={(e) => setUsername(e.target.value)} inputType="text" inputName="username"/>
        <LabelAndInput label="Password" value={password} handleChange={(e) => setPassword(e.target.value)} inputType="password" inputName="password"/>
        <LabelAndInput label="Confirm Password" value={repeatPassword} handleChange={(e) => setRepeatPassword(e.target.value)} inputType="password" inputName="password"/>
        <Button extraClasses="w-full mt-3 py-3 font-semibold" color="success">Create Account</Button>
    </form>
  )
}

export default SignupForm