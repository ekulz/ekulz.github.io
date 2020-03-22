import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <MenuBar />
      <Home />
    </div>
  );
};

export default App;
