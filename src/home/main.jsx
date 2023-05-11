import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import Header from '../header'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home />
  </React.StrictMode>,
)