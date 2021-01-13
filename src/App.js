import React from 'react';
import './App.css'
import NavBar from "./Components/NavBar";
import Router from "./Router"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
