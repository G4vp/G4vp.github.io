import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
import ProjectsPage from './pages/ProjectsPage'
import CRTTransition from './components/CRTTransition'

function App() {
  return (
    <Router>
      <CRTTransition />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
