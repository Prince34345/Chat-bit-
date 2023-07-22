import React from 'react';
import Button from './libs/atoms/Button';
import Login from "./libs/pages/Login"
import Registration from './libs/pages/Registration';
const App: React.FC = () => {
  return (
    <div>
      {/* Wrap the single element in an array */}
      <Registration/>
    </div>
  );
};

export default App;
