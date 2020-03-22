import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import MenuBar from './components/MenuBar'
import Home from './components/Home'

const App = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="App">
      <MenuBar />
      <Home />
    </div>
  );
};

export default App;
