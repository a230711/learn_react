import logo from './logo.svg';
import './App.css';
import Test from './Test/Parent';
import Component from './Context/Component';
import { useState } from 'react';
import { createContext } from 'react';
export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(true);
  console.log(dark);
  return (
    // <Test />
    <ThemeContext.Provider value={dark}>
      <Component />
    </ThemeContext.Provider>
  );
}

export default App;
