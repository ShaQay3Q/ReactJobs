import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // A wrapper component that looks for/ checks for any potential problems in the app
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
