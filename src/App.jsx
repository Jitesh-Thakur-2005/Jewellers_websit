import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './com/landing/Nav'
import Hero from './com/landing/Hero'
import Footer from './com/landing/footer/footre'
import Page2 from './com/page2/Page2';
import Cont_us from './com/page2/Contectus'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Nav/>
<Cont_us/>
{/* <Page2></Page2> */}
{/* <Hero/> */}

</>
  )
}

export default App
