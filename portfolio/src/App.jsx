import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import About from './routes/About'
import Contact from './routes/Contact'
import DownloadCv from './routes/DownloadCv'
import Home from './routes/Home'
import Project from './routes/Project'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/download' element={<DownloadCv />} />
      </Routes>
    </>
  )
}

export default App
