import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize("UA-161575351-1");

ReactDOM.render(<App />, document.getElementById('root'));