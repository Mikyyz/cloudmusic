import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.less'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
