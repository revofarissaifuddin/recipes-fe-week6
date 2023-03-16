
import './App.css';
import { useState } from 'react';
function App() {
  const [ number ]=useState(0)
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
