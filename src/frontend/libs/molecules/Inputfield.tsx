import React from 'react'

interface InputProps {
    placeholderText:string,
    type: string,
    textColor?:string,
}


const Inputfield  :React.FC<InputProps> = ({placeholderText, type, textColor}) => {
  return (
    <div className='p-5 w-96 '>
        <input type={type} className={`text-${textColor} p-4 outline-none border-2 w-full `} placeholder={placeholderText}  />
    </div>
  )
}

export default Inputfield;