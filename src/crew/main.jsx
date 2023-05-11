import React from 'react'
import ReactDOM from 'react-dom/client'
import Crew from './crew'
import Header from '../header'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Crew/>
  </React.StrictMode>,
)