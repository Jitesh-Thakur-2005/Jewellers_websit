import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Nav from './com/landing/Nav.jsx'
import Hero from './com/landing/Hero.jsx'
import Cont_us from './com/page2/Contectus.jsx'
import Page2 from './com/page2/Page2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Nav/>
      <Routes>
        
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/Custom_Jewelry' element={<Page2/>}></Route>
        <Route path='/Contact-Jewellers' element={<Cont_us/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </StrictMode>,
)
