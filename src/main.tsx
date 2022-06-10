import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import 'purecss/build/pure.css'
// import "purecss/build/base-min.css";
// import "purecss/build/grids-min.css";
// import "purecss/build/grids-responsive-min.css";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
