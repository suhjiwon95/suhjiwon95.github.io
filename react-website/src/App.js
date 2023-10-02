import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Navbar />
          <Route exact path="/"/>
      </Routes>
    </>

  );
}

export default App;
