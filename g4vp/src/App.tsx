import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
