import React from 'react'


interface ButtonProps {
    label: string,
    bg?: string,
    onclick?: React.MouseEventHandler
}

const Button : React.FC<ButtonProps> = ({label, bg, onclick}) => {
  return (
    <button onClick={onclick} className={`${bg} w-full text-white focus:animations p-5`}><p>{label}</p></button>
  )
}

export default Button;