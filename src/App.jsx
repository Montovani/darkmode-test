import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useContext } from 'react'
import { DarkContext } from './context/themedark.context'



function App() {
 const {isDarkMode} = useContext(DarkContext)
  return (
    <div className={isDarkMode?'dark-mode':"light-mode"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  )
}

export default App
