import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from '../header'
import Technology from './technology'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Technology />
  </React.StrictMode>,
)
