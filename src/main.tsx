import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './presentation/global/styles/global.css'
import App from './presentation/app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
