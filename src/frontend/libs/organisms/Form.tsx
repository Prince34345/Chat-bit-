import React from 'react'
import Inputfield from '../molecules/Inputfield'
import Button from '../atoms/Button'


interface FormProps {
     placeholder: string,
     type?: string,
     action?: any
}

const Form : React.FC<FormProps> = ({placeholder, type, action}) => {
  return (
      <form action={action}>
           <Inputfield placeholderText={`${placeholder}`}  type={`${type}`} textColor='primary-400' />
      </form>
  )
}

export default Form