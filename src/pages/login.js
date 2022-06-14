import React from 'react'
import LoginForm from '../components/LoginForm'
import Heading from '../components/Heading';
import { useUserContext } from '../context/userContext';
import Alert from '../components/Alert';

const Signup = () => {
  const {username} = useUserContext();

  return (
    <div className="mx-auto mt-20">
      <Heading extraClasses="text-center mb-8">Login</Heading>
      {
          username ?
          <Alert type="danger">{`You are already loggedin as ${username}`}</Alert> :
          <LoginForm />

      }
    </div>
  )
}

export default Signup