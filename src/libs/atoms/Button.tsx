// Button.tsx

import React from 'react';
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className='w-200'>
      {"Hello"}
    </button>
  );
};

export default Button;
