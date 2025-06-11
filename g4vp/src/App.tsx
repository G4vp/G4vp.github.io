import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderBlock from './components/Header'
import SeparatorBlock from './components/Separator'

const CardGrainyBackground = () => {
  return (
    <div className="card">
      <HeaderBlock/>
      <div className="card-content">
          <SeparatorBlock/>
          <SeparatorBlock/>
          <SeparatorBlock/>
      </div>
    </div>
  );
};

function App() {
  return (
    CardGrainyBackground() 
  )
}

export default App
