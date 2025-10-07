import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18next from 'i18next'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
