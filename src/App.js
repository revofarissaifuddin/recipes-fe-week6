
import './App.css';
import { useState,useEffect } from 'react';
function App() {
  const [ number,setNumber ]=useState(0)
  return (
    <div className="App">
      <header className="App-header">
        Helloworld
        <br/>
        { number }
      </header>
    </div>
  );
}

export default App;
