import React from 'react'
import Form from "../organisms/form"

const Login = () => {
  return (
    <div className='container flex justify-center items-center flex-col'>           
         <h1 className='font-serif text-5xl  text-primary-600'>Chat-Bit</h1>
         <h5 className=''>Login to existing account.</h5>
         <Form placeholder='Enter your Email Account'></Form>
         <Form placeholder='Enter your Password'></Form>
         <a href="">Forget Password ?</a>
    </div>
  )
}

export default Login