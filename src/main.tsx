import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
<App/>
    
  </StrictMode>,
)
