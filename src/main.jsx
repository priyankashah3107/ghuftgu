import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FirebaseAuth from './context/FirebaseAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseAuth>
    <App />
    </FirebaseAuth>
   
    </BrowserRouter>
   
  </React.StrictMode>,
)
