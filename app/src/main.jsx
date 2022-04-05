import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
