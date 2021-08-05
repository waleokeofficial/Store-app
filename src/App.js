import './App.css';
import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
      <Router>
        <HomePage></HomePage>      
      </Router>
    </div>
  );
}

export default App;
