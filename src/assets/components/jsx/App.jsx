import '../css/App.css'
import NavegationBar from './NavegationBar'
import Me from './Me'
import Projects from './Projects'
import Resume from './Resume'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes className='container'>
            <Route path="/" element={<NavegationBar/>}>
              <Route index element={<Me/>} />
              <Route path="projects"element={<Projects/>} />
              <Route path="resume"element={<Resume/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
