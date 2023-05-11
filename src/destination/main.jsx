import React from 'react'
import ReactDOM from 'react-dom/client'
import Destination from './destination'
import Header from '../header'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Destination/>
  </React.StrictMode>,
)
