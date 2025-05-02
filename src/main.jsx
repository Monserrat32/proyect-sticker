import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitExpExpert } from './GitExpExpert'
import './style.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitExpExpert />
  </StrictMode>,
)
