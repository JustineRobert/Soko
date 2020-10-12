import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
     //BEM Naming convention for styling
    <div className="app">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
