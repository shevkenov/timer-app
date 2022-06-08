import React from 'react'
import SignupForm from '../components/SignupForm'
import Heading from '../components/Heading';

const Signup = () => {
  return (
    <div className="mx-auto mt-20">
      <Heading extraClasses="text-center mb-8">Sign up</Heading>
        <SignupForm />
    </div>
  )
}

export default Signup