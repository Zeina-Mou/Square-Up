
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Work from './Pages/Work'
import Process from './Pages/Process'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NavBar from './SharedComponents/NavBar/NavBar'

function App() { 

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/process' element={<Process/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
