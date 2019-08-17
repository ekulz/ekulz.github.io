import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>Welcome!</h1>
        <p>
          <span role="img" aria-label="construction">🚧 </span> 
          Currently under construction...
          <span role="img" aria-label="construction"> 🚧</span> 
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
