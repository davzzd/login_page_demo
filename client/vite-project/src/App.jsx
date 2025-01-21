import './App.css'
import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className='hello'>
      {isRegister ? <Register /> : <Login />}
      <button className='switch-form' onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
    </div>
  );
};

export default App;

