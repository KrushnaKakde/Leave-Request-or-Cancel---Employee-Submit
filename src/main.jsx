import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Page1 from './components/Page1.jsx'
import Page2 from './components/Page2.jsx'
import Page3 from './components/Page3.jsx'
import Page4 from './components/Page4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Study_Time_Off" element={<Page4 />} />
        <Route path="/Leave_State1" element={<Page3 />} />
        <Route path="/Leave1_State1" element={<App />} />
        <Route path="/Leave2_State1" element={<Page2 />} />
        <Route path="/Commissioning_Mother" element={<Page1 />} />       
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)