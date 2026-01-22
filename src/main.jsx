import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { DarkContext, DarkWrapper } from './context/themedark.context.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <DarkWrapper>
        <App />
      </DarkWrapper>
    </BrowserRouter>
  </StrictMode>,
)
