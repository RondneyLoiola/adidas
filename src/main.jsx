import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/index.jsx'
import { Styles } from './styles/styles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Styles />
    <Home />
  </StrictMode>,
)
