import React from 'react';
import NavBar from "./Components/NavBar";
import Router from "./Router"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
