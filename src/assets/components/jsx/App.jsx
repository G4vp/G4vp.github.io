import '../css/App.css'
import NavegationBar from './NavegationBar'
import Me from './Me'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './Projects';

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes className='container'>
            <Route path="/" element={<NavegationBar/>}>
              <Route index element={<Me/>} />
              <Route path="projects"element={<Projects/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
