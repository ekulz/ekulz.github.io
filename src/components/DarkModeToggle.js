import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from 'react-toggle'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div>
      <Toggle 
        checked={darkMode.value} 
        onChange={darkMode.toggle} 
        icons={
          {checked: <span role="img" aria-label="day">🌙</span>,
          unchecked: <span role="img" aria-label="night">☀️</span>}}/>
    </div>
  );
};

export default DarkModeToggle;