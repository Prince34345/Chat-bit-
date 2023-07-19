import React from 'react';
import Button from './libs/atoms/Button';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      {/* Wrap the single element in an array */}
      <div>
      {[<Button key="button" onClick={handleClick}>Click me</Button>]}
      </div>
    </div>
  );
};

export default App;
