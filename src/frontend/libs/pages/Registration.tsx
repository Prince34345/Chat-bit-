import React from 'react'
import Form from "../organisms/form"
import Button from '../atoms/Button';

const Registration = () => {
  return (
    <>
    <div className='container flex justify-center items-center flex-col'>           
         <h1 className='font-serif text-5xl m-14 text-primary-600'>Chat-Bit</h1>
         <div className=' text-center w-full font-bold ml-4 '>
                 <h5 className='font-sans text-center text-md text-primary-700'>Registration for your Account.</h5>
         </div>
         <Form placeholder='Enter your Username'></Form>
         <Form placeholder='Enter your Email Account'></Form>
         <Form placeholder='Enter your Password'></Form>
         <div className=''> 
              <Button label='Create New Account' bg='bg-primary-500' />
         </div>
         <a href="">forget Password ?</a>
    </div>
  
    </>
  )
}

export default Registration