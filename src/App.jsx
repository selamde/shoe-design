import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <main className='min-h-screen'>
          <Outlet />
        </main>
      </div>
      <footer>
       <Footer/>
      </footer>
    </>
  )
}

export default App
